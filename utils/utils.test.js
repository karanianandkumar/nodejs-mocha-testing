const utils = require('./utils');
const expect = require('expect');
it('should add two numbers', () => {
    var res = utils.add(3, 6);

    expect(res).toBeA('number').toBe(9);
    // if (res != 9) {
    //     throw new Error(`Expected 9 but got ${res}`);
    // }
});

it('should square a number', () => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
})

it('should verify first and last names are set', () => {
    var res = utils.setName({ age: 25 }, "Anand Kumar");
    expect(res).toBeA('object').toInclude({ firstName: 'Anand', lastName: 'Kumar' })
})

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 7, (sum) => {
        expect(sum).toBeA('number').toBe(11);
        done();
    })
})


it('should async square the number', (done) => {
    utils.asyncSquare(5, (square) => {
        expect(square).toBeA('number').toBe(25);
        done();
    })
})
// it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({ name: 'Anand' }).toEqual({ name: 'Anand' });// For comparing Objects

    // expect([2, 3, 6]).toInclude(6);
    // expect([2, 3, 6]).toExclude(7);

    // expect({
    //     name: 'Anand',
    //     age: 25,
    //     location: 'Bangalore'
    // }).toInclude({
    //     age: 25
    // })
// })