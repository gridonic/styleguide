<template>
    <div class="app">
        <div class="header" />
        <div class="sidebar" />
        <div class="content">
            <component-list />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vuex, { mapActions } from 'vuex';

import ComponentLoader from '@/service/ComponentLoader';
import DataFetcher from '@/service/DataFetcher';
import GlobalConfig from '@/service/GlobalConfig';
import StyleguideStore from '@/store/StyleguideStore';
import ComponentList from '@/component/ComponentList';

Vue.use(Vuex);

const globalConfig = new GlobalConfig();
const dataFetcher = new DataFetcher();
const componentLoader = new ComponentLoader(globalConfig, dataFetcher);

export default {
    name: 'App',
    components: { ComponentList },
    computed: {
        // TODO: map getters
    },
    store: new Vuex.Store(
        new StyleguideStore(componentLoader),
    ),
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

        grid-template-columns: 200px auto;
        grid-template-rows: 40px auto;

        > .header {
            grid-column-start: 1;
            grid-column-end: 3;
            background-color: #C1E9FF;
        }

        > .sidebar {
            grid-row-start: 2;
            grid-row-end: 3;
            background-color: #C1E9FF;
        }

        > .content {
            grid-column-start: 2;
            grid-row-start: 2;

            padding: 1em;
        }
    }
</style>
