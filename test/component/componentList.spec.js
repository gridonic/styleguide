import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import ComponentList from '@/js/component/ComponentList.vue';
import StyleguideComponent from '@/js/component/StyleguideComponent.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    getters: {
        meta() {
            return {};
        },
        components() {
            return [
                { name: 'Component A' },
                { name: 'Component B' },
                { name: 'Component C' },
            ];
        },
    },
});


describe('ComponentList', () => {
    const build = () => {
        const wrapper = shallowMount(ComponentList, { localVue, store });
        return {
            wrapper,
            styleguideComponents: () => wrapper.findAll(StyleguideComponent),
        };
    };


    it('renders the component', () => {
        const { wrapper } = build();

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders three StyleguideComponents', () => {
        const { styleguideComponents } = build();

        expect(styleguideComponents().length).toBe(3);
    });

    it('should pass correct data to each styleguide component', () => {
        const { styleguideComponents } = build();

        const components = styleguideComponents();

        expect(components.at(0).props('name')).toBe('Component A');
        expect(components.at(1).props('name')).toBe('Component B');
        expect(components.at(2).props('name')).toBe('Component C');
    });
});
