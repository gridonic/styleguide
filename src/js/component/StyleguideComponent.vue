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
                v-for="(example, index) in examples"
                :key="index"
                :ref="index"
                class="example"
            >
                <iframe
                    v-if="iframe"
                    class="frame"
                />
                <!-- eslint-disable-next-line -->
                <span v-else v-html="example"/>
            </div>
        </div>
    </div>
</template>

<script>
import { iframeResizer } from 'iframe-resizer';

function buildHead(styles, scripts) {
    const styleTags = styles.map(style => `<link rel="stylesheet" href="${style}">`);

    // eslint-disable-next-line
    const scriptTags = scripts.map(script => `<script src="${script}"><\/script>`);

    return `<head>${styleTags.join()}${scriptTags.join()}</head>`;
}

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
        iframe: {
            type: Object,
            default: null,
        },
    },
    mounted() {
        if (this.iframe) {
            for (let i = 0; i < this.examples.length; i += 1) {
                const $example = this.$refs[i][0];

                const head = buildHead(this.styles, this.scripts);
                const body = `<body>${this.examples[i]}</body>`;
                const html = `${head}${body}`;

                const iframe = $example.querySelector('.frame');
                iframe.src = `data:text/html;charset=utf-8,${escape(html)}`;

                iframeResizer({}, iframe);
            }
        }
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

            > .example {
                > .frame {
                    width: 100%;
                    height: 200px;
                }
            }
        }
    }
</style>
