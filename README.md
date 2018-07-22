# ESM immport process.env.* bug

This minimal reproducible repository with a bug description on https://github.com/standard-things/esm/issues/515.

## Buggy behaviour

```
cd import-process-fail
yarn install
yarn mocha
```

### The output

```console
import-process-fail git:(master) ✗ yarn mocha
yarn run v1.7.0
$ /Users/deepj/dev/oss/esm-import-process-bug/import-process-fail/node_modules/.bin/mocha
NODE_ENV in ./config/index.js: undefined
NODE_ENV in ./db/knexConfig.js: development
NODE_ENV in ./db/knexInit.js: test


  Hokus Pokus
    ✓ passes


  1 passing (4ms)

✨  Done in 0.46s.
```

## Expected behaviour

For reproducing use these commands:

```
cd import-process-ok
yarn install
yarn mocha
```

### The output

```console
import-process-ok git:(master) ✗ yarn mocha
yarn run v1.7.0
$ /Users/deepj/dev/oss/esm-import-process-bug/import-process-ok/node_modules/.bin/mocha
NODE_ENV in ./config/index.js: test
NODE_ENV in ./db/knexConfig.js: test
NODE_ENV in ./db/knexInit.js: test


  Hokus Pokus
    ✓ passes


  1 passing (5ms)

✨  Done in 0.50s.
```

## Conclusion

I expect `NODE_ENV` is set to `test` since it is set top on all following import. But it's not possible in `import-process-fail` scenario. I need to require seperated "module" where I set `NODE_ENV` as is it in `import-process-ok` scenario.
