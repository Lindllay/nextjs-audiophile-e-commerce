import styles from "./CounterButton.module.css";

const CounterButton = (props) => {
	const classes = `${styles.box} ${props.className}`;
	return (
		<div className={classes}>
			<div className={styles.symbol}>-</div>
			<div className={styles.counter}>1</div>
			<div className={styles.symbol}>+</div>
		</div>
	);
};

export default CounterButton;
