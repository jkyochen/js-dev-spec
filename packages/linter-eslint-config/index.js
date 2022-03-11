'use strict';

module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "rules": {
        "eqeqeq": 2,
        "require-await": 2,
        "complexity": [
            2,
            15
        ],
        "max-lines-per-function": [
            2,
            20
        ]
    }
}
