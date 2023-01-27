import styles from "./_Gallery.module.scss";
import respond from "../../data/config";

const Gallery = (props) => {
	let refractoredImgSrc = {};
	for (const key in props.gallery) {
		const img = {
			[key]: {
				mobile: props.gallery[key].mobile.replace(".", ""),
				tablet: props.gallery[key].tablet.replace(".", ""),
				desktop: props.gallery[key].desktop.replace(".", ""),
			},
		};
		refractoredImgSrc = { ...refractoredImgSrc, ...img };
	}

	return (
		<section className={styles.gallery}>
			<picture className={`${styles["img-box"]} ${styles["img-1"]}`}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet={refractoredImgSrc.first.mobile}
					alt={props.name}
				/>
				<source
					media={`(max-width: ${respond.tabLand})`}
					srcSet={refractoredImgSrc.first.tablet}
					alt={props.name}
				/>
				<img src={refractoredImgSrc.first.desktop} alt={props.name} />
			</picture>
			<picture className={`${styles["img-box"]} ${styles["img-2"]}`}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet={refractoredImgSrc.second.mobile}
					alt={props.name}
				/>
				<source
					media={`(max-width: ${respond.tabLand})`}
					srcSet={refractoredImgSrc.second.tablet}
					alt={props.name}
				/>
				<img src={refractoredImgSrc.second.desktop} alt={props.name} />
			</picture>
			<picture className={`${styles["img-box"]} ${styles["img-3"]}`}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet={refractoredImgSrc.third.mobile}
					alt={props.name}
				/>
				<source
					media={`(max-width: ${respond.tabLand})`}
					srcSet={refractoredImgSrc.third.tablet}
					alt={props.name}
				/>
				<img src={refractoredImgSrc.third.desktop} alt={props.name} />
			</picture>
		</section>
	);
};

export default Gallery;
