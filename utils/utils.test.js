const utils = require('./utils');
it('should add two numbers', () => {
    var res = utils.add(3, 6);

    if (res != 9) {
        throw new Error(`Expected 9 but got ${res}`);
    }

});

it('should square a number', () => {
    var res = utils.square(5);
    if (res != 25) {
        throw new Error(`Should return 25 but got ${res}`)
    }
})