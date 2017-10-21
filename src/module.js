const fs = require('fs');
const path = require('path');

// eslint-disable-next-line padding-line-between-statements
const exists = (path) => {
    try {
        fs.statSync(path); // eslint-disable-line no-sync

        return true;
    } catch (err) {
        return false;
    }
};
const resolve = () => {
    let packagePath = path.resolve(__dirname, '..', 'package.json');

    while (exists(packagePath)) {
        const codelyzerPath = path.resolve(path.dirname(packagePath), 'node_modules', 'codelyzer');

        if (exists(codelyzerPath)) {
            return codelyzerPath;
        }

        packagePath = path.resolve(packagePath, '..', '..', '..', 'package.json');
    }
};

module.exports = {
    rules: {
        'adjacent-overload-signatures': true,
        'angular-whitespace': [ true, 'check-interpolation', 'check-pipe', 'check-semicolon' ],
        'array-type': [ true, 'array' ],
        'arrow-parens': true,
        'arrow-return-shorthand': true,
        'ban-types': [ true, [ 'OpaqueToken', 'Use InjectionToken instead.' ] ],
        'banana-in-box': true,
        'callable-types': true,
        'class-name': true,
        'comment-format': [ true, 'check-space', 'check-uppercase' ],
        'component-class-suffix': true,
        'contextual-life-cycle': true,
        'curly': true,
        'decorator-not-allowed': true,
        'directive-class-suffix': true,
        'eofline': true,
        'forin': true,
        'import-blacklist': [ true, 'lodash-es', 'rxjs', 'rxjs/Rx' ],
        'import-destructuring-spacing': true,
        'import-spacing': true,
        'indent': [ true, 'spaces' ],
        'interface-name': [ true, 'always-prefix' ],
        'interface-over-type-literal': true,
        'invoke-injectable': true,
        'label-position': true,
        'max-line-length': [ true, 140 ],
        'member-access': true,
        'member-ordering': [ true, { order: 'instance-sandwich' } ],
        'new-parens': true,
        'newline-before-return': true,
        'no-access-missing-member': true,
        'no-arg': true,
        'no-attribute-parameter-decorator': true,
        'no-bitwise': true,
        'no-consecutive-blank-lines': true,
        'no-console': true,
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-empty': true,
        'no-empty-interface': true,
        'no-eval': true,
        'no-forward-ref': true,
        'no-inferrable-types': true,
        'no-input-rename': true,
        'no-invalid-this': true,
        'no-irregular-whitespace': true,
        'no-misused-new': true,
        'no-output-rename': true,
        'no-parameter-reassignment': true,
        'no-reference': true,
        'no-require-imports': true,
        'no-shadowed-variable': true,
        'no-string-literal': false,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-trailing-whitespace': true,
        'no-unnecessary-initializer': true,
        'no-unsafe-finally': true,
        'no-unused-expression': true,
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'object-literal-key-quotes': [ true, 'consistent-as-needed' ],
        'object-literal-shorthand': true,
        'object-literal-sort-keys': true,
        'one-line': [ true, 'check-catch', 'check-else', 'check-finally', 'check-open-brace', 'check-whitespace' ],
        'one-variable-per-declaration': [ true, 'ignore-for-loop' ],
        'ordered-imports': [ true, { 'named-imports-order': 'lowercase-last' } ],
        'pipe-impure': true,
        'prefer-const': true,
        'prefer-function-over-method': [ true, 'allow-public', 'allow-protected' ],
        'prefer-method-signature': true,
        'prefer-template': true,
        'quotemark': [ true, 'single', 'avoid-escape' ],
        'radix': true,
        'semicolon': [ true, 'always' ],
        'space-before-function-paren': true,
        'switch-default': true,
        'template-to-ng-template': true,
        'templates-no-negated-async': true,
        'templates-use-public': true,
        'trailing-comma': [ true, { multiline: 'never', singleline: 'never' } ],
        'triple-equals': true,
        'typedef-whitespace': [
            true,
            {
                'call-signature': 'nospace',
                'index-signature': 'nospace',
                'parameter': 'nospace',
                'property-declaration': 'nospace',
                'variable-declaration': 'nospace'
            }, {
                'call-signature': 'onespace',
                'index-signature': 'onespace',
                'parameter': 'onespace',
                'property-declaration': 'onespace',
                'variable-declaration': 'onespace'
            }
        ],
        'typeof-compare': true,
        'unified-signatures': true,
        'use-host-property-decorator': true,
        'use-input-property-decorator': true,
        'use-isnan': true,
        'use-life-cycle-interface': true,
        'use-output-property-decorator': true,
        'use-pipe-decorator': true,
        'use-pipe-transform-interface': true,
        'use-view-encapsulation': true,
        'variable-name': [ true, 'allow-leading-underscore', 'check-format' ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-module',
            'check-operator',
            'check-preblock',
            'check-separator',
            'check-type',
            'check-typecast'
        ]
    },
    rulesDirectory: [
        resolve()
    ]
};
