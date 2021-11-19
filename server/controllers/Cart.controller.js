const Cart = require('../models/Cart.model')

module.exports = {
    findAll: (req, res) => {
        Cart.find()
            .then(allCarts => res.json(allCarts))
            .catch(err => res.status(400).json({ message: "error find all", error: err }))
    },
    findOne: (req, res) => {
        Cart.findById(req.params.id)
            .then(cart => res.json(cart))
            .catch(err => res.status(400).json({ message: "error find one", error: err }))
    },

    create: (req, res) => {
        Cart.create(req.body)
            .then(newCart => res.json(newCart))
            .catch(err => res.status(400).json({ message: "error creating", error: err }))
    },
    update: (req, res) => {
        Cart.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updateCart => res.json(updateCart))
            .catch(err => res.status(400).json({ message: "Error updating", error: err }))
    },
    delete: (req,res) => {
        Cart.findByIdAndDelete(req.params.id)
            .then(result => res.json({result: result}))
            .catch(err => res.status(400).json({message: "error delete", error: err}))
    }
}