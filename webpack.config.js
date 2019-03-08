const { extendConfig } = require('@gridonic/webpack');

module.exports = extendConfig
    .usePreset('vue')
    .forAll({
        output: {
            filename: 'index.js',
        },
        css: {
            filename: 'styleguide.css',
            extract: false,
        },
    })
    .forDevelopment({
        devServer: {
            port: 8081,
        },
        html: {
            template: './example/index.ejs',
        },
        clean: {
            path: null, // Don't delete the output folder when building for dev
        },
    })
    .forProduction({
        output: {
            library: 'styleguide',
            libraryTarget: 'window',
        },
    })
    .toConfig;
