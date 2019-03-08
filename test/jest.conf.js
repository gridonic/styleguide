const path = require('path');

module.exports = {
    rootDir: path.resolve('./'),
    setupFiles: [
        `${__dirname}/jest.setup.js`,
    ],
    moduleFileExtensions: [
        'js', '.scss', 'json', 'vue',
    ],
    moduleNameMapper: {
        '^@/(.*)$': `${path.resolve('src')}/$1`,
        // '\\.scss$': `${__dirname}/sassStub.js`, // @see https://github.com/facebook/jest/issues/870
    },
    transform: {
        '^.+\\.vue$': `${path.resolve('node_modules')}/vue-jest`,
        '^.+\\.js$': `${path.resolve('node_modules')}/babel-jest`,
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/',
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules',
    ],
};
