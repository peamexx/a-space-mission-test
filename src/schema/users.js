const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;

const user = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
    },
    password: {
        type: String,
        required: true,
        maxlength: 30,
    }
});

user.pre('save', function(callback) {
    const user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return callback(err);

            bcrypt.hash(user.password, salt, function(err, hasedCode) {
                if(err) return callback(err);

                user.password = hasedCode;
                callback();
            })            
        });
    } else {
        callback();
    }
});

module.exports = mongoose.model('users', user);