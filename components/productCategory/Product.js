import styles from "./Product.module.css";
import Button from "../../UI/Button";

const Product = (props) => {
	return (
		<li className={styles.item}>
			<figure className={styles.figure}>
				<img src={props.image.desktop} alt={props.name} />
			</figure>
			<div className={styles.content}>
				{props.new && <p className={styles.overline}>New Product</p>}
				<h2 className={styles["heading-2"]}>{props.name}</h2>
				<p className={styles.paragraph}>{props.description}</p>
				<Button className="btn--1">See Product</Button>
			</div>
		</li>
	);
};

export default Product;
