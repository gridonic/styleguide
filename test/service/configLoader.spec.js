import GlobalConfig from '@/js/service/GlobalConfig';

describe('load global config', () => {
    it('returns config given in dom data attribute for styleguide', () => {
        const config = {
            componentsUrl: '/styleguide/components',
            components: [],
        };

        document.body.innerHTML = `<div class="" data-styleguide-config='${JSON.stringify(config)}'></div>`;

        const globalConfig = new GlobalConfig();

        expect(globalConfig.componentsUrl).toBe('/styleguide/components');
        expect(globalConfig.components).toEqual([]);
    });
});
