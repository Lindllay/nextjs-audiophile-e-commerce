import styles from "./_Features.module.scss";
import ListItem from "./ListItem";

const Features = (props) => {
	const includes = props.includes.map((item, index) => (
		<ListItem quantity={item.quantity} item={item.item} key={index} />
	));

	return (
		<section className={styles.features}>
			<div className={styles["features-box"]}>
				<h3 className={styles["heading-3"]}>Features</h3>
				<p className={styles.paragraph}>{props.features}</p>
			</div>
			<div className={styles["itb-box"]}>
				<h3 className={styles["heading-3"]}>In the box</h3>
				<ul className={styles.list}>{includes}</ul>
			</div>
		</section>
	);
};

export default Features;
