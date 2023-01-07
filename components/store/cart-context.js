import React from "react";
const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: () => {},
	removeItem: (id) => {},
	clearItems: () => {},
});

export default CartContext;
