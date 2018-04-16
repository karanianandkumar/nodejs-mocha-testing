var db=require('./db');
module.exports.handleSignup = (email, password) => {
    //Check if the email alread exists.
    db.saveUser({
        email,
        password
    })
    //Send the welcome email
}