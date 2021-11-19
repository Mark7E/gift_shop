const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    itemId: {
        type: String
    },
    title: {
        type: String,
    },

    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    price : {
        type: Number,
    },
    qty: {
        type: Number,
        default: 1
    }
},
    { timestamps: true });

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;