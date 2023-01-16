import styles from "./Gear.module.scss";
import respond from "../../../config";

const Gear = (props) => {
	return (
		<section className={styles.gear}>
			<div className={styles.content}>
				<h2 className={styles["heading-2"]}>
					Bringing you the <span>best</span> audio gear
				</h2>
				<p className={styles.paragraph}>
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
			<picture className={styles.picture}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet="/assets/shared/mobile/image-best-gear.jpg"
					alt="gearImg"
				/>
				<source
					media={`(max-width: ${respond.tablet})`}
					srcSet="/assets/shared/tablet/image-best-gear.jpg"
					alt="gearImg"
				/>
				<img src="/assets/shared/desktop/image-best-gear.jpg" alt="gearImg" />
			</picture>
		</section>
	);
};

export default Gear;
