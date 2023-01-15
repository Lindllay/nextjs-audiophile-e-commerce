import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import NavButton from "../UI/NavButton";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const itemsInCart = cartCtx.items.reduce((acc, cur) => acc + cur.amount, 0);

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({
			...item,
			amount: 1,
		});
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	cartCtx.items.sort((a, b) => (a.price > b.price ? -1 : 1));

	const cartItems = (
		<ul className={styles.list}>
			{cartCtx.items.map((item) => (
				<CartItem
					id={item.id}
					key={item.id}
					cartName={item.cartName}
					price={item.price}
					image={item.image}
					amount={item.amount}
					onAddItem={cartItemAddHandler.bind(null, item)}
					onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);

	return (
		<Modal className={styles.cart} onClick={props.onHideCart}>
			<div className={styles["quantity-container"]}>
				{!!itemsInCart && (
					<h6 className={styles["heading-6"]}>{`Cart (${itemsInCart})`}</h6>
				)}
				{!!itemsInCart && (
					<button className={styles.btn} onClick={cartCtx.clearItems}>
						Remove All
					</button>
				)}
			</div>
			{itemsInCart ? (
				cartItems
			) : (
				<p className={styles.paragraph}>
					Your shopping cart is currently empty!
				</p>
			)}
			{!!itemsInCart && (
				<NavButton
					href="/checkout"
					className="btn--1 full-width"
					onClick={props.onHideCart}
				>
					Checkout
				</NavButton>
			)}
		</Modal>
	);
};

export default Cart;
