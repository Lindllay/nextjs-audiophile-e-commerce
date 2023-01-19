import styles from "./_Hero.module.scss";
import Wrapper from "../../components/layout/Wrapper";
import respond from "../../config";
import NavButton from "../UI/NavButton";
import { forwardRef } from "react";

const Hero = forwardRef((props, ref) => {
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
				<div className={`${styles.content}`} ref={ref} id="hero">
					<p className="overline">New product</p>
					<h1 className="heading-1">
						XX99 Mark II
						<br /> Headphones
					</h1>
					<p className="paragraph font-white75">
						Experience natural, lifelike audio and exceptional
						<br /> build quality made for the passionate music
						<br /> enthusiast.
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
});

export default Hero;
