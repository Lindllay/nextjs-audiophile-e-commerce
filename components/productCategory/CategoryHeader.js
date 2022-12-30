import styles from "./CategoryHeader.module.css";
import Wrapper from "../layout/Wrapper";

const CategoryHeader = (props) => {
	return (
		<section className={styles["category-header"]}>
			<h2 className={styles["heading-2"]}>{props.category}</h2>
		</section>
	);
};

export default CategoryHeader;
