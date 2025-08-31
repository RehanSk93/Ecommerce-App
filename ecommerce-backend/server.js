const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ecommerce-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("err")
    );

// Product Schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});
const Product = mongoose.model("Product", ProductSchema);


// Routes
app.get("/", (req, res) => {
    res.send("Backend is working properly 🚀");
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post("/products", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

app.listen(5000, () => console.log("Server running on port 5000"));