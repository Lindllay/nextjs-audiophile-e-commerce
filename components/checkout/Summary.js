import styles from "./Summary.module.css";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import SummaryItem from "./SummaryItem";
import Button from "../UI/Button";

const Summary = (props) => {
	const CartCtx = useContext(CartContext);

	const total = CartCtx.totalAmount;
	const shipping = total && 50;
	const vat = total * 0.23;
	const grandTotal = total + shipping;

	const summaryList = (
		<ul className={styles.list}>
			{CartCtx.items.map((item) => (
				<SummaryItem
					image={item.image}
					name={item.cartName}
					price={item.price}
					quantity={item.amount}
					key={item.id}
				/>
			))}
		</ul>
	);

	return (
		<div className={styles.summary}>
			<h6 className={styles["heading-6"]}>Summary</h6>
			{summaryList}
			<div className={styles["text-box"]}>
				<p className={styles.label}>Total:</p>
				<p className={styles.amount}>{`$ ${total.toLocaleString("en-US")}`}</p>
			</div>
			<div className={styles["text-box"]}>
				<p className={styles.label}>Shipping:</p>
				<p className={styles.amount}>{`$ ${shipping}`}</p>
			</div>
			<div className={styles["text-box"]}>
				<p className={styles.label}>VAT (Included):</p>
				<p className={styles.amount}>{`$ ${vat.toFixed(2)}`}</p>
			</div>
			<div className={styles["text-box"]}>
				<p className={styles.label}>Grand Total</p>
				<span className={styles.amount}>{`$ ${grandTotal}`}</span>
			</div>
			{!!total && (
				<Button
					type="submit"
					className="btn--1 full-width top-margin-small"
					form="form"
				>
					Continue
				</Button>
			)}
		</div>
	);
};

export default Summary;
