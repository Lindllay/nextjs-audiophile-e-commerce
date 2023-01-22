import styles from "./_ProductCategory.module.scss";
import NavButton from "../UI/NavButton";
import respond from "../../config";

const ProductCategory = (props) => {
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
					media={`(max-width: ${respond.tabLand})`}
					srcSet={refractoredImgSrc.tablet}
				/>

				<img src={refractoredImgSrc.desktop} alt={props.name} />
			</picture>
			<div className={styles.content}>
				{props.new && <p className={styles.overline}>New Product</p>}
				<h2 className={styles["heading-2"]}>{props.name}</h2>
				<p className={styles.paragraph}>{props.description}</p>

				<NavButton href={`/${props.category}/${props.slug}`} className="btn--1">
					See Product
				</NavButton>
			</div>
		</li>
	);
};

export default ProductCategory;
