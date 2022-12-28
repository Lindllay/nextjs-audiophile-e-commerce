import styles from "./Hero.module.css";
import Wrapper from "../../components/layout/Wrapper";
import Button from "../../UI/Button";

const Hero = (props) => {
	return (
		<section className={styles.hero}>
			<img
				src="/assets/home/desktop/image-hero.jpg"
				alt="hero-background"
				className={styles.background}
			/>
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
					<Button className="btn--1">See product</Button>
				</div>
			</Wrapper>
		</section>
	);
};

export default Hero;
