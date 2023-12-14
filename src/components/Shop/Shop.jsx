//import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
	return (
		<div className="shop">
			<div className="product-container">
                {
                    products.map((product) => <Product 
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
			<div className="cart-container">Cart container</div>
		</div>
	);
};

export default Shop;
