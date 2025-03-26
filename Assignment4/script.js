// URL of your JSON file (replace with your actual GitHub Pages URL)
const JSON_URL = 'https://rittanbajwa.github.io/js-assignment4/';

// Function to fetch products
const fetchProducts = () => {
    return fetch(JSON_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            throw error;
        });
};

// Function to display products
const displayProducts = (products) => {
    const container = document.getElementById('products-container');
    
    // Clear any existing content
    container.innerHTML = '';

    // Create product cards
    products.forEach(product => {
        // Create product card element
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Set inner HTML with product details
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h2>${product.name}</h2>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            </div>
        `;

        // Add to container
        container.appendChild(productCard);
    });
};

// Main function to load products
const loadProducts = async () => {
    try {
        const products = await fetchProducts();
        displayProducts(products);
    } catch (error) {
        const container = document.getElementById('products-container');
        container.innerHTML = `<p>Error loading products: ${error.message}</p>`;
    }
};

// Load products when page loads
window.addEventListener('DOMContentLoaded', loadProducts);
