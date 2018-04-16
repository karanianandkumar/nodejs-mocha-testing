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