# Circular 🔄

A set of tests exploring circular dependencies in JavaScript.

## Running the tests:

```bash
# Start a local static file server
python3 -m http.server 1111
```

### Test 1: ReferenceError: Cannot access 'a' before initialization

1. Browser: `http://localhost:1111/test-1/`
2. Node (Modules): `node test-1/node-entry.mjs`
3. Webpack: `http://localhost:1111/test-1/webpack-index.html`

### Test 2: Uncaught RangeError: Maximum call stack size exceeded

1. Browser: `http://localhost:1111/test-2/`
2. Node (Modules): `node test-2/node-entry.mjs`
3. Webpack: `http://localhost:1111/test-2/webpack-index.html`

