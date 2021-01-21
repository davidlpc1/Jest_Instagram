const sum = require('../src/sum')

test('Soma 1 e 4 com esperança de ser 5',() => {
    expect(sum( 1,4 )).toBe(5)
})