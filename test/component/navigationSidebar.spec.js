import { shallowMount } from '@vue/test-utils';
import NavigationSidebar from '@/js/component/NavigationSidebar';

describe('given main sidebar component', () => {
    function build() {
        const wrapper = shallowMount(NavigationSidebar);

        return {
            wrapper,
            componentSection: () => wrapper.find('[data-section="Components"]'),
        };
    }

    it('displays when rendered', () => {
        const { wrapper } = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('displays section titles', () => {
        const { wrapper } = build();

        const sections = wrapper.findAll('.section');
        expect(sections.length > 0).toBeTruthy();
    });

    it('contains at least basic and components sections', () => {
        const { wrapper } = build();

        expect(wrapper.find('[data-section="Basic"]').exists())
            .toBeTruthy();

        expect(wrapper.find('[data-section="Components"]').exists())
            .toBeTruthy();
    });

    describe('given no components', () => {
        it('contains no component links', () => {
            const { componentSection } = build();

            expect(componentSection().findAll('.component').length)
                .toBe(0);
        });
    });

    describe('given components', () => {
        function buildWithComponents() {
            const { wrapper, componentSection } = build();

            wrapper.setProps({
                components: [
                    { name: 'Primary Button' },
                    { name: 'Search Box' },
                ],
            });

            return {
                wrapper,
                componentSection,
                sectionLinks: section => section().findAll('.link'),
            };
        }

        it('contains one link for each component', () => {
            const { componentSection, sectionLinks } = buildWithComponents();

            expect(sectionLinks(componentSection).length)
                .toBe(2);
        });

        it('component links href="#name-of-compoment"', () => {
            const { componentSection, sectionLinks } = buildWithComponents();

            const links = sectionLinks(componentSection);

            expect(links.at(0).attributes('href'))
                .toEqual('#Primary Button');

            expect(links.at(1).attributes('href'))
                .toEqual('#Search Box');
        });
    });
});
