import styles from "./Others.module.css";
import OthersItem from "./OthersItem";

const Others = (props) => {
	return (
		<section className={styles.others}>
			<h3 className={styles["heading-3"]}>You may also like</h3>
			<ul className={styles["others-list"]}>
				<OthersItem />
				<OthersItem />
				<OthersItem />
			</ul>
		</section>
	);
};

export default Others;
