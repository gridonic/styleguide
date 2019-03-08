import { shallowMount } from '@vue/test-utils';

import StyleguideComponent from '@/js/component/StyleguideComponent.vue';

describe('StyleguideComponent', () => {
    const build = () => {
        const wrapper = shallowMount(StyleguideComponent, {
            propsData: {
                name: 'Fancy Component',
            },
        });

        return {
            wrapper,
            name: () => wrapper.find('.name'),
        };
    };

    it('renders the component', () => {
        const { wrapper } = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders the components name', () => {
        const { name } = build();

        expect(name().exists()).toBeTruthy();
        expect(name().text()).toBe('Fancy Component');
    });
});
