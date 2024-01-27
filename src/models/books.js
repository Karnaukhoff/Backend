const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
        },
    author: {
        type: String,
        required: true,
        minlength: 2,
      },
      released: {
        type: Number,
        required: true,
      },
});

module.exports = mongoose.model('book', userSchema);