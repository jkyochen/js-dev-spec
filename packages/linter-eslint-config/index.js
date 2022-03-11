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
        "eqeqeq": "error",
        "require-await": "error",
        "complexity": [
            "error",
            15
        ],
        "max-lines-per-function": [
            "error",
            20
        ]
    }
}
