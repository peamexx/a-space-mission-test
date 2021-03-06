const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const line = new Schema({
    chapter: {
        type: Number,
        required: true,
        trim: true,
    },
    text: {
        type: Array,
    }
});

module.exports = mongoose.model('lines', line);