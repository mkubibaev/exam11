const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: 'Item title is required!'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: 'Item category is required!'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: 'Item seller is required!'
    },
    description: String,
    image: String,
    price: {
        type: Number,
        min: 0
    },
    published_at: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
