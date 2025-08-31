const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// POST new product
const addProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
};

// GET single product
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
};

// UPDATE product
const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
};

// DELETE product
const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
};

module.exports = {
    getProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
