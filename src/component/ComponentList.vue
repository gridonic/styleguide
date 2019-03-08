<template>
    <div class="component-list">
        <div
            v-for="component in components"
            :key="component.name"
            class="component"
        >
            <styleguide-component v-bind="component" />
        </div>
    </div>
</template>

<script>
import StyleguideComponent from '@/component/StyleguideComponent';
import { mapGetters } from 'vuex';

export default {
    name: 'ComponentList',
    components: {
        StyleguideComponent,
    },
    computed: {
        ...mapGetters([
            'components',
        ]),
    },
};
</script>

<style lang="scss" scoped>
    .component-list {
        display: grid;
        grid-row-gap: 1em;
        grid-auto-flow: row dense;

        > .component {
        }
    }
</style>
