<template>
    <div class="navigation-sidebar -typography-styleguide">
        <div
            v-for="section in sections"
            :key="section.title"
            class="section"
            :data-section="section.title"
        >
            <h4>{{ section.title }}</h4>
            <a
                v-for="item in section.items"
                :key="item.title"
                :href="'#' + item.title"
                class="link"
            >
                {{ item.title }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationSidebar',
    props: {
        components: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        sections() {
            return [
                {
                    title: 'Basic',
                },
                {
                    title: 'Components',
                    items: this.components.map(c => ({
                        title: c.name,
                    })),
                },
            ];
        },
    },
};
</script>

<style lang="scss" scoped>
    .navigation-sidebar {
        padding: 10px;

        > .section {
            margin-bottom: 10px;

            > .link {
                display: block;
                padding-left: 10px;
                margin-top: 5px;
                margin-bottom: 5px;
            }
        }
    }
</style>
