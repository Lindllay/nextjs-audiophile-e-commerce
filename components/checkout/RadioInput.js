import { forwardRef, useRef } from "react";
import styles from "./RadioInput.module.css";

const RadioInput = forwardRef((props, ref) => {
	const classes = `${styles["form-control"]} ${props.className}`;

	const passPaymentMethod = (event) => {
		props.onGetPaymentMethod(event.target.value);
	};

	const value = props.value;
	return (
		<div className={classes}>
			<input
				type={props.type}
				id={props.id}
				className={styles.input}
				name={props.name}
				value={props.value}
				defaultChecked={props.defaultChecked}
				ref={ref}
				onClick={passPaymentMethod}
			/>
			<label htmlFor={props.id} className={styles.label}>
				<span className={styles.button}></span>
				<span className={styles["label-text"]}>{props.label}</span>
			</label>
		</div>
	);
});

export default RadioInput;
