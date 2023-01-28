import styles from "./_RadioInput.module.scss";

const RadioInput = (props) => {
	const classes = `${styles["form-control"]} ${props.className}`;

	const passPaymentMethod = (event) => {
		props.onGetPaymentMethod(event.target.value);
	};

	return (
		<div className={classes}>
			<input
				type={props.type}
				id={props.id}
				className={styles.input}
				name={props.name}
				value={props.value}
				defaultChecked={props.defaultChecked}
				onClick={passPaymentMethod}
			/>
			<label htmlFor={props.id} className={styles.label}>
				<span className={styles.button}></span>
				<span className={styles["label-text"]}>{props.label}</span>
			</label>
		</div>
	);
};

export default RadioInput;
