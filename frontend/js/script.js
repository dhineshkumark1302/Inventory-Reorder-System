function addProduct() {
    const productName = document.getElementById('productName').value;
    const productId = document.getElementById('productId').value;
    const stockQuantity = document.getElementById('stockQuantity').value;
    const reorderLevel = document.getElementById('reorderLevel').value;
    const supplierEmail = document.getElementById('supplierEmail').value;

    const productData = {
        productName: productName,
        productId: productId,
        stockQuantity: Number(stockQuantity),
        reorderLevel: reorderLevel,
        supplierEmail: supplierEmail
    };

    fetch('/api/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Product added successfully!');
        displayInventory();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayInventory() {
    fetch('/api/products')
    .then(response => response.json())
    .then(products => {
        const inventoryTable = document.getElementById('inventoryTable');
        inventoryTable.innerHTML = '';

        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.productName}</td>
                <td>${product.productId}</td>
                <td>${product.stockQuantity}</td>
                <td>${product.reorderLevel}</td>
                <td>${product.supplierEmail}</td>
            `;
            inventoryTable.appendChild(row);

            if (product.stockQuantity < product.reorderLevel) {
                alert(`Alert: ${product.productName} is below the reorder level!`);
                console.log(`Reorder notification sent to: ${product.supplierEmail}`);
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.getElementById('addProductButton').addEventListener('click', addProduct);
window.onload = displayInventory;