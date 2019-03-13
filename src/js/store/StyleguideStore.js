export default class StyleguideStore {
    /**
     * @param {GlobalConfig} globalConfig
     * @param {ComponentLoader} componentsLoader
     */
    constructor(globalConfig, componentsLoader) {
        this.globalConfig = globalConfig;
        this.componentsLoader = componentsLoader;
    }

    get namespaced() {
        return true;
    }

    get state() {
        return {
            meta: {
                iframe: this.globalConfig ? this.globalConfig.iframe : null,
            },
            components: [],
        };
    }

    get getters() {
        return {
            meta: state => state.meta,
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
