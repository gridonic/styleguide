<template>
    <div class="styleguide-component">
        <h2 class="name">
            {{ name }}
        </h2>
        <div class="examples">
            <h3 class="title">
                Example
            </h3>
            <div
                v-for="example in examples"
                :key="example"
            >
                <!-- eslint-disable-next-line -->
                <span v-html="example"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        examples: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
    .styleguide-component {
        > .name {
            margin: 0;
        }

        > .examples {
            > .title {
                text-transform: uppercase;
                color: #E7E3D7;
                font-weight: normal;
            }
        }
    }
</style>
