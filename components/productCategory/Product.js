import styles from "./Product.module.css";
import Button from "../../UI/Button";
import CounterButton from "../../UI/CounterButton";

const Product = (props) => {
	return (
		<li
			className={`${styles.item} ${props.margin ? "block-margin-large" : ""}`}
		>
			<figure className={styles.figure}>
				<img src={props.image.desktop} alt={props.name} />
			</figure>
			<div className={styles.content}>
				{props.new && <p className={styles.overline}>New Product</p>}
				<h2 className={styles["heading-2"]}>{props.name}</h2>
				<p className={styles.paragraph}>{props.description}</p>
				{props.isDetail && (
					<p className={styles.price}>{`$ ${props.price.toLocaleString(
						"en-US"
					)}`}</p>
				)}
				{!props.isDetail && <Button className="btn--1">See Product</Button>}
				{props.isDetail && (
					<div className={styles.actions}>
						<CounterButton />
						<Button className="btn--1">Add To Cart</Button>
					</div>
				)}
			</div>
		</li>
	);
};

export default Product;
