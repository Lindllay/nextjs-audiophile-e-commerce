import Modal from "../../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Button from "../../UI/Button";

const Cart = (props) => {
	const cartItems = (
		<ul className={styles.list}>
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
		</ul>
	);

	return (
		<Modal className={styles.cart} onClick={props.onHideCart}>
			<div className={styles["quantity-container"]}>
				<h6 className={styles["heading-6"]}>Cart(3)</h6>
				<button className={styles.btn}>Remove All</button>
			</div>
			{cartItems}
			<Button className="btn--1 full-width">Checkout</Button>
		</Modal>
	);
};

export default Cart;
