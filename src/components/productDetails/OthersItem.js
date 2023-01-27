import styles from "./_OthersItem.module.scss";
import respond from "../../data/config";
import NavButton from "../UI/NavButton";

const OthersItem = (props) => {
	const refractoredImgSrc = {
		mobile: props.image.mobile.replace(".", ""),
		tablet: props.image.tablet.replace(".", ""),
		desktop: props.image.desktop.replace(".", ""),
	};

	const getCategory = props.slug.split("-").pop();
	const othersCategory = getCategory.endsWith("s")
		? getCategory
		: getCategory + "s";

	return (
		<li className={styles.item}>
			<picture className={styles["img-box"]}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet={refractoredImgSrc.mobile}
					alt="product-image"
				/>
				<source
					media={`(max-width: ${respond.tabLand})`}
					srcSet={refractoredImgSrc.tablet}
					alt="product-image"
				/>
				<img src={refractoredImgSrc.desktop} alt="product-image" />
			</picture>
			<h5 className={styles["heading-5"]}>{props.name}</h5>
			<NavButton href={`/${othersCategory}/${props.slug}`} className="btn--1">
				See product
			</NavButton>
		</li>
	);
};

export default OthersItem;
