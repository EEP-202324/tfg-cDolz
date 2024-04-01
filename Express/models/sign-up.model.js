const {model, Schema} = require('mongoose');

const signUpSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    birthDate: String
});

module.exports = model('singUp', signUpSchema);