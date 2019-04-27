const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: 'Category title is required!'
    }
});
