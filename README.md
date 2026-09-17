# Inventory Reorder Alert System

## Overview
The Inventory Reorder Alert System is a web application designed to help manage product inventory efficiently. It allows users to add new products, monitor stock levels, and receive alerts when stock falls below a specified reorder level. The application consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express.

## Features
- Add new products with details such as Product Name, Product ID, Stock Quantity, Reorder Level, and Supplier Email.
- Display the current inventory in a user-friendly table format.
- Automatically monitor stock levels and alert users when stock is below the reorder level.
- Simulate sending reorder notifications to suppliers.

## Project Structure
```
inventory-reorder-alert-system
├── frontend
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
├── backend
│   ├── server.js
│   ├── package.json
│   ├── database.json
│   └── routes
│       └── products.js
├── .gitignore
└── README.md
```

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: JSON file (database.json)

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- A code editor (e.g., Visual Studio Code).

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd inventory-reorder-alert-system
   ```

2. Navigate to the backend directory:
   ```
   cd backend
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the backend server:
   ```
   node server.js
   ```

5. Open a new terminal and navigate to the frontend directory:
   ```
   cd ../frontend
   ```

6. Open `index.html` in your web browser to access the application.

## Usage
- Use the form on the frontend to add new products to the inventory.
- The inventory table will display all products along with their stock levels.
- Alerts will be shown if any product's stock is below the reorder level.
- Check the console for simulated reorder notifications sent to suppliers.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is open-source and available under the MIT License.