const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');



describe("App", () => {
    var db = {
        saveUser: expect.createSpy()
    }

    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    })

    it('should call save user with user object', () => {
        var email = "anand.k@iaaatech.com";
        var password = "12345";

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    })
})