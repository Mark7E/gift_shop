const Product = require('../models/Product.model')

module.exports = {
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.status(400).json({ message: "error find all", error: err }))
    },
    findOne: (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.status(400).json({ message: "error find one", error: err }))
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.status(400).json({ message: "error creating", error: err }))
    },
    update: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updateProduct => res.json(updateProduct))
            .catch(err => res.status(400).json({ message: "Error updating", error: err }))
    },
    delete: (req,res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json({result: result}))
            .catch(err => res.status(400).json({message: "error delete", error: err}))
    }
}