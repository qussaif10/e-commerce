import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <Link to={`/Products/product_${product.id}`}>  {/* Add this line */}
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                    </Link>  {/* Add this line */}
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
