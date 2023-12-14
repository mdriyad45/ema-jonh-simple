//import React from 'react';
import "./Product.css";

const Product = (props) => {
	const { name, price, seller, ratings, img, quantity } = props.product;

	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<h6 className="product-name">{name}</h6>
				<p className="product-price">Price: ${price}</p>
				<p className="product-manufracture">Manufacturer: {seller}</p>
				<p className="product-ratting">Rating: {ratings} star</p>
			</div>
            <button className="btn-cart">Add to cart</button>
		</div>
	);
};

export default Product;
