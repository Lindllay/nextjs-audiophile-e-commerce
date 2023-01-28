import styles from "./_CategoryHeader.module.scss";

const CategoryHeader = (props) => {
	return (
		<section className={styles["category-header"]}>
			<h2 className={styles["heading-2"]}>{props.category}</h2>
		</section>
	);
};

export default CategoryHeader;
