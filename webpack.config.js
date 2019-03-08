const { extendConfig } = require('@gridonic/webpack');

module.exports = extendConfig
    .usePreset('vue')
    .forAll({
        output: {
            filename: 'index.js',
        },
        css: {
            filename: 'styleguide.css',
            extract: false, // Include css in resulting js file
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
            path: `${__dirname}/dist`,
            library: 'styleguide',
            libraryTarget: 'window',
        },
    })
    .toConfig;
