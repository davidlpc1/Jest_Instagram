const sum = require('../src/sum')

test('Adds 1 and 4 to equal 5',() => {
    expect(sum( 1,4 )).toBe(5)
})

test('Adds 70 and 2 to equal 72',() => {
    expect(sum( 70,2 )).toBe(72)
})
