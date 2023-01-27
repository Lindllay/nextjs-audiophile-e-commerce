import styles from "./_Popup.module.scss";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartContext from "../store/cart-context";
import SummaryItem from "./SummaryItem";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

const Popup = () => {
	const router = useRouter();
	const cartCtx = useContext(CartContext);
	const [showAllItems, setShowAllItems] = useState(false);

	const allItems = cartCtx.items.map((item) => (
		<SummaryItem
			image={item.image}
			name={item.cartName}
			price={item.price}
			quantity={item.amount}
			key={item.id}
		/>
	));

	const firstItem =
		cartCtx.items.length > 0 ? (
			<SummaryItem
				image={cartCtx.items[0].image}
				name={cartCtx.items[0].cartName}
				price={cartCtx.items[0].price}
				quantity={cartCtx.items[0].amount}
				key={cartCtx.items[0].id}
			/>
		) : (
			[]
		);

	const toggleVisibleItems = () => {
		setShowAllItems((prevState) => !prevState);
	};
	const restItems = cartCtx.items.length - 1;

	const backToHomeHandler = () => {
		router.push("/");
		document.body.style.overflow = "unset";
		cartCtx.clearItems();
	};

	return (
		<Modal className={styles.popup}>
			<figure className={styles.image}>
				<img src="/assets/checkout/icon-order-confirmation.svg" alt="icon" />
			</figure>
			<h3 className={styles["heading-3"]}>Thank you for your order</h3>

			<p className={styles.paragraph}>
				You will receive an email confirmation shortly.
			</p>
			<div className={styles.summary}>
				<ul className={styles["summary-products"]}>
					{showAllItems === true ? allItems : firstItem}
					{cartCtx.items.length > 1 ? (
						<button className={styles.btn} onClick={toggleVisibleItems}>
							{showAllItems === true
								? "View less"
								: `and ${restItems} other item${restItems === 1 ? "" : "'s"}`}
						</button>
					) : (
						""
					)}
				</ul>
				<div className={styles["summary-total"]}>
					<p className={styles.total}>Grand Total</p>
					<p className={styles.price}>{`$ ${(
						cartCtx.totalAmount + 50
					).toLocaleString("en-US")}`}</p>
				</div>
			</div>
			<Button
				className="btn--1 full-width top-margin-small"
				onClick={backToHomeHandler}
			>
				Back to Home
			</Button>
		</Modal>
	);
};

export default Popup;
