import { useEffect, useReducer, useRef } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD": {
			const updatedTotalAmount =
				state.totalAmount + action.item.price * action.item.amount;

			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);

			const existingCartItem = state.items[existingCartItemIndex];
			let updatedItems;

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = [...state.items, action.item];
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}

		case "REMOVE": {
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);
			const existingCartItem = state.items[existingCartItemIndex];

			const updatedTotalAmount = state.totalAmount - existingCartItem.price;
			let updatedItems;
			if (existingCartItem.amount > 1) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount - 1,
				};
				updatedItems = [...state.items];
				updatedItems[existingCartItemIndex] = updatedItem;
			} else {
				updatedItems = state.items.filter((item) => item.id !== action.id);
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			};
		}

		case "CLEAR": {
			return defaultCartState;
		}
		case "LOAD": {
			return {
				items: action.payload.items,
				totalAmount: action.payload.totalAmount,
			};
		}
	}

	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const initialRender = useRef(true);

	useEffect(() => {
		const data = localStorage.getItem("cart");
		if (data) {
			loadCartItemsFromStorageHandler();
		}
	}, []);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		localStorage.setItem("cart", JSON.stringify(cartState));
	}, [cartState]);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: "ADD",
			item: item,
		});
	};
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({
			type: "REMOVE",
			id,
		});
	};

	const clearAllItemsFromCartHandler = () => {
		dispatchCartAction({
			type: "CLEAR",
		});
	};

	const loadCartItemsFromStorageHandler = () => {
		dispatchCartAction({
			type: "LOAD",
			payload: JSON.parse(localStorage.getItem("cart")),
		});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearItems: clearAllItemsFromCartHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
