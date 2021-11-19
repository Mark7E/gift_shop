const Product = require("../controllers/Product.controller")
const Cart = require("../controllers/Cart.controller")

module.exports= (app) => {
    app.get("/api/products", Product.findAll);
    app.get("/api/products/:id", Product.findOne);
    app.post("/api/products", Product.create);
    app.put("/api/products/:id", Product.update);
    app.delete("/api/products/:id", Product.delete)

    app.get("/api/cart", Cart.findAll);
    app.get("/api/cart/:id", Cart.findOne);
    app.post("/api/cart/new", Cart.create);
    app.put("/api/cart/:id", Cart.update);
    app.delete("/api/cart/:id", Cart.delete)
}