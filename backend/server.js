const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend')));

// Load database
const databasePath = path.join(__dirname, 'database.json');

// Helper function to read database
const readDatabase = () => {
    const data = fs.readFileSync(databasePath);
    return JSON.parse(data);
};

// Helper function to write to database
const writeDatabase = (data) => {
    fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
};

// Routes
app.use('/api/products', require('./routes/products'));

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;