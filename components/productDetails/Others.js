import styles from "./Others.module.css";
import OthersItem from "./OthersItem";

const Others = (props) => {
	const others = props.others.map((item, index) => (
		<OthersItem
			image={item.image}
			name={item.name}
			slug={item.slug}
			category={props.category}
			key={index}
		/>
	));

	return (
		<section className={styles.others}>
			<h3 className={styles["heading-3"]}>You may also like</h3>
			<ul className={styles["others-list"]}>{others}</ul>
		</section>
	);
};

export default Others;
