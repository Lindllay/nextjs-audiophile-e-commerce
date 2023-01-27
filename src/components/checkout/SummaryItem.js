import styles from "./SummaryItem.module.css";

const SummaryItem = (props) => {
	return (
		<li className={styles.item}>
			<picture className={styles.img}>
				<img src={props.image} alt="image" />
			</picture>
			<div className={styles.info}>
				<div className={styles["name-price-box"]}>
					<p className={styles.name}>{props.name}</p>
					<p className={styles.price}>{`$ ${props.price.toLocaleString(
						"en-US"
					)}`}</p>
				</div>
				<p className={styles.quantity}>x{props.quantity}</p>
			</div>
		</li>
	);
};

export default SummaryItem;
