const { Schema, model } = require('mongoose')

const Product = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

module.exports = model('Product', Product)