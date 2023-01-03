import styles from "./Hero.module.css";
import Wrapper from "../../components/layout/Wrapper";
import Button from "../../UI/Button";
import respond from "../../config";
import Link from "next/link";

const Hero = (props) => {
	return (
		<section className={styles.hero}>
			<picture>
				<source
					media={`(max-width: ${respond.mobile})`}
					srcSet="/assets/home/mobile/image-header.jpg"
					alt="hero-background"
				/>
				<source
					media={`(max-width: ${respond.tablet})`}
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
				<div className={styles.content}>
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

					<Link href="/headphones/xx99-mark-two-headphones" passHref>
						<Button className="btn--1">See product</Button>
					</Link>
				</div>
			</Wrapper>
		</section>
	);
};

export default Hero;
