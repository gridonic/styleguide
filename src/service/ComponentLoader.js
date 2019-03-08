export default class ComponentLoader {
    /**
     * @param {GlobalConfig} globalConfig
     * @param {DataFetcher} dataFetcher
     */
    constructor(globalConfig, dataFetcher) {
        this.dataFetcher = dataFetcher;
        this.globalConfig = globalConfig;
    }

    /**
     * @return {Promise<Array>}
     */
    async load() {
        if (this.areComponentsAvailableFromConfig()) {
            return this.globalConfig.components;
        }

        return this.fetchFromEndpoint();
    }

    areComponentsAvailableFromConfig() {
        return this.globalConfig.components && this.globalConfig.components.length > 0;
    }

    async fetchFromEndpoint() {
        return this.dataFetcher.fetch(this.globalConfig.componentsUrl);
    }
}
