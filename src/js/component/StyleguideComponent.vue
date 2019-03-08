<template>
    <div class="styleguide-component">
        <div class="information -typography-styleguide">
            <h2 class="name">
                {{ name }}
            </h2>
        </div>
        <div class="exampletitle -typography-styleguide">
            <h3>
                Example
            </h3>
        </div>
        <div class="examples">
            <div
                class="example"
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
        > .information {
            > .name {
                margin: 0;
            }
        }

        > .exampletitle {
            margin-top: 20px;
        }

        > .examples {
            margin-top: 10px;

            display: grid;
            grid-auto-flow: row dense;
            grid-gap: 15px;
        }
    }
</style>
