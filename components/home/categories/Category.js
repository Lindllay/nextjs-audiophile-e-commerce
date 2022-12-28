import styles from "./Category.module.css";
import Button from "../../../UI/Button";

const Category = (props) => {
	return (
		<div className={styles.category}>
			<figure className={styles.figure}>
				<img src={props.image} alt="thumbnail" />
			</figure>
			<h6 className={styles["heading-6"]}>{props.categoryName}</h6>
			<Button className="btn--shop">
				Shop
				<img src="assets/shared/desktop/icon-arrow-right.svg" />
			</Button>
		</div>
	);
};

export default Category;
