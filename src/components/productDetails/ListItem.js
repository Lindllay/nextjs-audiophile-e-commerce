import styles from "./_ListItem.module.scss";

const ListItem = (props) => {
	return (
		<li className={styles["item-box"]}>
			<span className={styles.quantity}>{`${props.quantity}x`}</span>
			<p className={styles.item}>{props.item}</p>
		</li>
	);
};

export default ListItem;
