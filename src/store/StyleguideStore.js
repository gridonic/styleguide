export default class StyleguideStore {
    /**
     * @param {ComponentLoader} componentsLoader
     */
    constructor(componentsLoader) {
        this.componentsLoader = componentsLoader;
    }

    get namespaced() {
        return true;
    }

    get state() {
        return {
            components: [],
        };
    }

    get getters() {
        return {
            components: state => state.components,
        };
    }

    get mutations() {
        return {
            updateComponents(state, components) {
                state.components = components;
            },
        };
    }

    get actions() {
        const self = this;

        return {
            async loadStyleguide({ commit }) {
                commit(
                    'updateComponents',
                    await self.componentsLoader.load(),
                );
            },
        };
    }
}
