const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        minlength: [3, "Product title be at least 3 characters"]
    },

    imageUrl: {
        type: String,
        required: [true, "Description must be present"],
        minlength: [1, "Please input a valid url"]
    },
    description: {
        type: String,
        required: [true, "Product catch phrase is required"],
        minlength: [5, "Product catch phrase must be at least 5 characters"]
    },
    price : {
        type: Number,
        required: [true, "Product price is required"],

    }
},
    { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;