import ComponentLoader from '@/js/service/ComponentLoader';
import DataFetcher from '@/js/service/DataFetcher';
import GlobalConfig from '@/js/service/GlobalConfig';

jest.mock('@/js/service/DataFetcher');
jest.mock('@/js/service/GlobalConfig');

let componentLoader;

const mockFetch = jest.fn(() => [
    { name: 'Primary Button' },
    { name: 'Search Box' },
    { name: 'Main Navigation' },
]);

DataFetcher.mockImplementation(() => ({
    fetch: mockFetch,
}));

GlobalConfig.mockImplementation(() => ({
    componentsUrl: '/styleguide/components',
}));

beforeAll(() => {
    componentLoader = new ComponentLoader(new GlobalConfig(), new DataFetcher());
});

beforeEach(() => {
    mockFetch.mockClear();
});

describe('components config', () => {
    it('should use the componentsUrl from Global config for fetching data', async () => {
        await componentLoader.load();

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('/styleguide/components');
    });
});

describe('load components using fetcher', () => {
    it('returns correct expected of components', async () => {
        const components = await componentLoader.load();

        expect(components.length).toBe(3);
    });

    it('returns the three components fetched by the DataFetcher', async () => {
        const components = await componentLoader.load();

        expect(components[0].name).toBe('Primary Button');
        expect(components[1].name).toBe('Search Box');
        expect(components[2].name).toBe('Main Navigation');
    });
});

describe('load components from config', () => {
    let customComponentLoader;

    beforeEach(() => {
        GlobalConfig.mockImplementationOnce(() => ({
            componentsUrl: '/styleguide/components',
            components: [
                { name: 'Config Component' },
                { name: 'Another Component' },
            ],
        }));

        customComponentLoader = new ComponentLoader(new GlobalConfig(), new DataFetcher());
    });

    it('does not call fetcher if components is defined in config', async () => {
        await customComponentLoader.load();

        expect(mockFetch).toHaveBeenCalledTimes(0);
    });

    it('returns components defined in config', async () => {
        const components = await customComponentLoader.load();

        expect(components.length).toBe(2);
        expect(components[0].name).toBe('Config Component');
        expect(components[1].name).toBe('Another Component');
    })
});
