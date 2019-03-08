import Vue from 'vue';
import Vuex from 'vuex';

import ComponentLoader from '@/service/ComponentLoader';
import StyleguideStore from '@/store/StyleguideStore';

jest.mock('@/service/ComponentLoader');

const components = [
    { name: 'Component A' },
    { name: 'Component B' },
];

ComponentLoader.mockImplementation(() => ({
    load: () => components,
}));

Vue.use(Vuex);

const store = new Vuex.Store(new StyleguideStore(
    new ComponentLoader(),
));

describe('Styleguide Store', () => {
    it('should contain components in state after loading data', async () => {
        await store.dispatch('loadStyleguide');
        expect(store.getters.components).toEqual(components);
    });
});
