import styles from "./Product.module.css";
import Button from "../../UI/Button";
import CounterButton from "../../UI/CounterButton";
import respond from "../../config";
import Link from "next/link";
import NavButton from "../../UI/NavButton";

const Product = (props) => {
	const refractoredImgSrc = {
		desktop: props.image.desktop.replace(".", ""),
		tablet: props.image.tablet.replace(".", ""),
		mobile: props.image.mobile.replace(".", ""),
	};

	return (
		<li
			className={`${styles.item} ${props.margin ? "block-margin-large" : ""}`}
		>
			<picture className={styles.picture}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet={refractoredImgSrc.mobile}
				/>
				<source
					media={`(max-width: ${respond.tablet})`}
					srcSet={refractoredImgSrc.tablet}
				/>

				<img src={refractoredImgSrc.desktop} alt={props.name} />
			</picture>
			<div className={styles.content}>
				{props.new && <p className={styles.overline}>New Product</p>}
				<h2 className={styles["heading-2"]}>{props.name}</h2>
				<p className={styles.paragraph}>{props.description}</p>
				{props.isDetail && (
					<p className={styles.price}>{`$ ${props.price.toLocaleString(
						"en-US"
					)}`}</p>
				)}
				{!props.isDetail && (
					<NavButton
						href={`/${props.category}/${props.slug}`}
						className="btn--1"
					>
						See Product
					</NavButton>
				)}
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
