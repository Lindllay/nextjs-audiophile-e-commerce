import styles from "./CartItem.module.css";
import CounterButton from "../../UI/CounterButton";

const CartItem = (props) => {
	return (
		<li className={styles["cart-item"]}>
			<picture className={styles.picture}>
				<img src="/assets/cart/image-xx59-headphones.jpg" alt="xx59" />
			</picture>
			<div className={styles["product-info"]}>
				<p className={styles.name}>XX99 MK II</p>
				<p className={styles.price}>$ 2,999</p>
			</div>
			<CounterButton className={styles["counter-button"]} />
		</li>
	);
};

export default CartItem;
