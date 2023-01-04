import styles from "./OthersItem.module.css";
import Button from "../../UI/Button";
import respond from "../../config";
import Link from "next/link";

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
					media={`(max-width: ${respond.tablet})`}
					srcSet={refractoredImgSrc.tablet}
					alt="product-image"
				/>
				<img src={refractoredImgSrc.desktop} alt="product-image" />
			</picture>
			<h5 className={styles["heading-5"]}>{props.name}</h5>
			<Button className="btn--1">
				<Link href={`/${othersCategory}/${props.slug}`} className={styles.link}>
					See product
				</Link>
			</Button>
		</li>
	);
};

export default OthersItem;