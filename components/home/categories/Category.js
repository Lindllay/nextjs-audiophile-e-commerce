import styles from "./_Category.module.scss";
import Button from "../../UI/Button";
import Link from "next/link";

const Category = (props) => {
	return (
		<Link
			className={styles.category}
			href={`/${props.categoryName}`}
			onClick={props.onClick}
		>
			<figure className={styles.figure}>
				<img src={props.image} alt="thumbnail" />
			</figure>
			<h6 className={styles["heading-6"]}>{props.categoryName}</h6>
			<Button className="btn--shop">
				Shop
				<img src="/assets/shared/desktop/icon-arrow-right.svg" />
			</Button>
		</Link>
	);
};

export default Category;
