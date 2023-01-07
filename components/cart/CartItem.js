import styles from "./CartItem.module.css";
import CounterButton from "../UI/CounterButton";

const CartItem = (props) => {
	return (
		<li className={styles["cart-item"]}>
			<picture className={styles.picture}>
				<img src={props.image} alt={props.name} />
			</picture>
			<div className={styles["product-info"]}>
				<p className={styles.name}>{props.cartName}</p>
				<p className={styles.price}>{`$ ${(
					props.price * props.amount
				).toLocaleString("en-US")}`}</p>
			</div>
			<CounterButton
				className={styles["counter-button"]}
				amount={props.amount}
				isCartButton={true}
				onAddItem={props.onAddItem}
				onRemoveItem={props.onRemoveItem}
			/>
		</li>
	);
};

export default CartItem;
