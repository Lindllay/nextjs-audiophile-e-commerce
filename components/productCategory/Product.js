import styles from "./Product.module.css";
import Button from "../UI/Button";
import CounterButton from "../UI/CounterButton";
import respond from "../../config";
import NavButton from "../UI/NavButton";
import Bump from "../UI/Bump";

import { useContext, useRef, useState } from "react";
import CartContext from "../store/cart-context";

const Product = (props) => {
	const [bump, setBump] = useState(false);

	const cartCtx = useContext(CartContext);

	const refractoredImgSrc = {
		desktop: props.image.desktop.replace(".", ""),
		tablet: props.image.tablet.replace(".", ""),
		mobile: props.image.mobile.replace(".", ""),
	};
	const amountInput = useRef();

	const addItemHandler = () => {
		const amount = +amountInput.current.innerText;
		cartCtx.addItem({
			id: props.id,
			cartName: props.cartName,
			price: props.price,
			image: `/assets/cart/image-${props.slug}.jpg`,
			amount,
		});
		setBump(true);
		const timer = setTimeout(() => {
			setBump(false);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	};

	return (
		<li
			className={`${styles.item} ${props.margin ? "block-margin-large" : ""}`}
		>
			<Bump bump={bump} />
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
						<CounterButton ref={amountInput} />
						<Button className="btn--1" onClick={addItemHandler}>
							Add To Cart
						</Button>
					</div>
				)}
			</div>
		</li>
	);
};

export default Product;
