import React, { useState, useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ match }) => {
    const productId = match.params.id;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(error => console.error("Error fetching data: ", error));
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <div className="product-detail-left">
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
            </div>
            <div className="product-detail-right">
                <h1>${product.price}</h1>
                <button>Add to Cart</button>
                <p>In Stock</p>
            </div>
        </div>
    );
};

export default ProductDetail;
