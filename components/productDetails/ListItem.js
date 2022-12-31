import styles from "./ListItem.module.css";

const ListItem = (props) => {
	return (
		<li className={styles["item-box"]}>
			<span className={styles.quantity}>1x</span>
			<p className={styles.item}>Item</p>
		</li>
	);
};

export default ListItem;
