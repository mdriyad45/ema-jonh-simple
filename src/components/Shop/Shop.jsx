//import React from 'react';
import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	useEffect(() => {
		const sortedCart = getShoppingCart();
        const saveCart = [];
		console.log(sortedCart);
		//step1: get id
		for (const id in sortedCart) {
			//step2: get the product by using id
			const addedProduct = products.find((product) => product.id === id);

			if (addedProduct) {
				//step3: get quantity f the product
				const quantity = sortedCart[id];
				addedProduct.quantity = quantity;
				console.log(addedProduct);
                //step4: add the addedProduct to the saveCart
                saveCart.push(addedProduct);
			}
		}
        //set5: set the cart
        setCart(saveCart);
	}, [products]);
	const handleAddToCart = (product) => {
        let newCart = [];
		//const newCart = [...cart, product];
        //if product doesn't exist in the cart, then set quantity
        //if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
		setCart(newCart);
		addToDb(product.id);
	};

	return (
		<div className="shop">
			<div className="product-container">
				{products.map((product) => (
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
