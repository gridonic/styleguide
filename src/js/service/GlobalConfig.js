export default class GlobalConfig {
    constructor() {
        this.config = this.loadConfig();
    }

    /**
     * @return {string}
     */
    get componentsUrl() {
        return this.config.componentsUrl || '/';
    }

    /**
     * @return {Object}
     */
    get iframe() {
        return this.config.iframe || null;
    }

    /**
     * @return {Array}
     */
    get components() {
        return this.config.components || [];
    }

    /**
     * @private
     *
     * @return {any}
     */
    loadConfig() {
        const styleguideConfigElement = this.getStyleguideConfigElement();
        const rawStyleguideConfig = styleguideConfigElement.dataset.styleguideConfig;

        return JSON.parse(rawStyleguideConfig);
    }

    /**
     * @private
     *
     * @return {Element}
     */
    getStyleguideConfigElement() {
        return document.querySelector('[data-styleguide-config]');
    }
}
