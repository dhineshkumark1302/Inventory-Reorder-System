const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const databasePath = path.join(__dirname, '../database.json');

// Helper function to read the database
const readDatabase = () => {
    const data = fs.readFileSync(databasePath);
    return JSON.parse(data);
};

// Helper function to write to the database
const writeDatabase = (data) => {
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
};

// Route to add a new product
router.post('/add', (req, res) => {
    const { productName, productId, stockQuantity, reorderLevel, supplierEmail } = req.body;
    const products = readDatabase();

    const newProduct = {
        productName,
        productId,
        stockQuantity,
        reorderLevel,
        supplierEmail
    };

    products.push(newProduct);
    writeDatabase(products);
    res.status(201).json({ message: 'Product added successfully!' });
});

// Route to get all products
router.get('/', (req, res) => {
    const products = readDatabase();
    res.json(products);
});

// Route to check stock levels
router.get('/check-stock', (req, res) => {
    const products = readDatabase();
    const lowStockProducts = products.filter(product => product.stockQuantity < product.reorderLevel);
    
    if (lowStockProducts.length > 0) {
        lowStockProducts.forEach(product => {
            console.log(`Reorder alert for ${product.productName}. Supplier notified at ${product.supplierEmail}.`);
        });
    }
    
    res.json(lowStockProducts);
});

module.exports = router;