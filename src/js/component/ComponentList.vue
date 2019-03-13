<template>
    <div class="component-list">
        <div
            v-for="component in components"
            :key="component.name"
            class="component"
        >
            <styleguide-component
                v-bind="component"
                :iframe="meta.iframe"
            />
        </div>
    </div>
</template>

<script>
import StyleguideComponent from '@/js/component/StyleguideComponent';
import { mapGetters } from 'vuex';

export default {
    name: 'ComponentList',
    components: {
        StyleguideComponent,
    },
    computed: {
        ...mapGetters([
            'components',
            'meta',
        ]),
    },
};
</script>

<style lang="scss" scoped>
    .component-list {
        display: grid;
        grid-row-gap: 2em;
        grid-auto-flow: row dense;

        > .component {
        }
    }
</style>
