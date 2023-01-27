import React from "react";
import styles from "./CounterButton.module.css";

const CounterButton = React.forwardRef((props, ref) => {
	const classes = `${styles.box} ${props.className}`;

	const increaseQuantity = () => {
		if (props.isCartButton) {
			props.onAddItem();
			return;
		}
		ref.current.innerText++;
	};

	const decreaseQuantity = () => {
		if (props.isCartButton) {
			props.onRemoveItem();
			return;
		}
		if (+ref.current.innerText > 1) {
			ref.current.innerText--;
		}
	};

	return (
		<div className={classes}>
			<div className={styles.symbol} onClick={decreaseQuantity}>
				-
			</div>
			<div className={styles.counter} ref={ref}>
				{props.amount || 1}
			</div>
			<div className={styles.symbol} onClick={increaseQuantity}>
				+
			</div>
		</div>
	);
});

export default CounterButton;
