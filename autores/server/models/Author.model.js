const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: function (name) {
                return name.length >= 3
            },
            message: 'Name should be at least 3 characters'
        },
        minlength: 3,
        required: true
    }, 
    lastName: {
        type: String,
        validate: {
            validator: function (lastName) {
                return lastName.length >= 3
            },
            message: 'lastName should be at least 3 characters'
        },
        minlength: 3,
        required: true
    }
    
}, { timestamps: true });
    

module.exports.AuthorModel = mongoose.model('Author', AuthorSchema)