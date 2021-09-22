const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    tags:{
        type: Array,
        require: true,
    },
    typeProduct:{
        type: String,
        require: false,
    },
    description: {
        type: String,
        require: false,
    },
    imageProduct: {
        type: Buffer, 
        require: false,  
    },
    value: {
        type: Array,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,        
    },
    owner: {
        type: String,
        require: true,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;