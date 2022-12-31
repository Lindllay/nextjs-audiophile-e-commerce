import styles from "./CounterButton.module.css";

const CounterButton = (props) => {
	return (
		<div className={styles.box}>
			<div className={styles.symbol}>-</div>
			<div className={styles.counter}>1</div>
			<div className={styles.symbol}>+</div>
		</div>
	);
};

export default CounterButton;
