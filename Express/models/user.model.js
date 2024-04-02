const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    birthDate: String
});

module.exports = model('users', userSchema);