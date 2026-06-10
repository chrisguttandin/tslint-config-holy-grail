const { Configuration, Linter } = require('tslint');

describe('tslint-config-holy-grail', () => {
    let configuration;
    let linter;

    beforeEach(() => {
        ({ results: configuration } = Configuration.findConfiguration('src/module.js'));

        const program = Linter.createProgram('test/fixtures/tsconfig.json');

        linter = new Linter({ fix: false, formatter: 'json' }, program);
    });

    it('should lint a dummy file', () => {
        linter.lint('test/fixtures/dummy.tsx', '', configuration);

        const failures = linter.getResult().failures;

        expect(failures).to.deep.equal([]);
    });
});
