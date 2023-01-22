import styles from "./_Hero.module.scss";
import Wrapper from "../../components/layout/Wrapper";
import NavButton from "../UI/NavButton";
import respond from "../../config";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<picture className={styles.picture}>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet="/assets/home/mobile/image-header.jpg"
					alt="hero-background"
				/>
				<source
					media={`(max-width: ${respond.tabLand})`}
					srcSet="/assets/home/tablet/image-header.jpg"
					alt="hero-background"
				/>
				<img
					src="/assets/home/desktop/image-hero.jpg"
					alt="hero-background"
					className={styles.background}
				/>
			</picture>

			<Wrapper className={styles["wrapper-hero"]}>
				<div className={`${styles.content}`} id="hero">
					<p className={styles.overline}>New product</p>
					<h1 className={styles["heading-1"]}>
						XX99 Mark II
						<br /> Headphones
					</h1>
					<p className={styles.paragraph}>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>

					<NavButton
						href="/headphones/xx99-mark-two-headphones"
						className="btn--1"
					>
						See product
					</NavButton>
				</div>
			</Wrapper>
		</section>
	);
};

export default Hero;
