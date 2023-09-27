import React from 'react';

const ProductDetail = ({ match }) => {
    const productId = match.params.id;

    return (
        <div>
            <h1>Product Detail for ID: {productId}</h1>
            {/* Add more details here */}
        </div>
    );
};

export default ProductDetail;
