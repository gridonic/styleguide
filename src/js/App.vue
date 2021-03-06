<template>
    <div class="app">
        <div class="header">
            <img
                class="logo"
                src="@/images/logo.png"
            >
        </div>
        <navigation-sidebar
            class="sidebar"
            :components="components"
        />
        <div class="content">
            <component-list />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vuex, { mapActions, mapGetters } from 'vuex';

import ComponentLoader from '@/js/service/ComponentLoader';
import DataFetcher from '@/js/service/DataFetcher';
import GlobalConfig from '@/js/service/GlobalConfig';
import StyleguideStore from '@/js/store/StyleguideStore';
import ComponentList from '@/js/component/ComponentList';
import NavigationSidebar from '@/js/component/NavigationSidebar';

Vue.use(Vuex);

const globalConfig = new GlobalConfig();
const dataFetcher = new DataFetcher();
const componentLoader = new ComponentLoader(globalConfig, dataFetcher);

export default {
    name: 'App',
    components: {
        ComponentList,
        NavigationSidebar,
    },
    store: new Vuex.Store(
        new StyleguideStore(globalConfig, componentLoader),
    ),
    computed: {
        ...mapGetters([
            'components',
        ]),
    },
    created() {
        this.load();
    },
    methods: {
        ...mapActions({
            load: 'loadStyleguide',
        }),
    },
};
</script>

<style lang="scss" scoped>
    .app {
        display: grid;
        height: 100%;

        grid-template-columns: 250px auto;
        grid-template-rows: 80px auto;

        > .header {
            grid-column-start: 1;
            grid-column-end: 3;
            background-color: #FF967C;

            padding: 1em;

            > .logo {
                height: 100%;
            }
        }

        > .sidebar {
            grid-row-start: 2;
            grid-row-end: 3;
            background-color: #E7E3D7;
        }

        > .content {
            grid-column-start: 2;
            grid-row-start: 2;

            padding: 1em;
        }
    }
</style>
