# Install Jest
```
    npm install --save-dev jest
```
### Or with Yarn
```
    yarn add --dev jest
```

# Create src/sum.js and add the following code
```js
    const sum = (...values) => 
        values.reduce((value,accumulattor) => value + accumulattor)

    module.exports = sum
```

# Create tests/sum.test.js and add the following code
```js
    const sum = require('../src/sum') // Import the sum function

    test('Adds 1 and 4 to equal 5',() => {
        expect(sum( 1,4 )).toBe(5) // Test the sum function with 1 and 4 values expected to be equal 5
    })

    test('Adds 70 and 2 to equal 72',() => {
        expect(sum( 70,2 )).toBe(72) // Test the sum function with 70 and 4 values expected to be equal 2
    })

```

# Run the test in Terminal
```
    jest
```