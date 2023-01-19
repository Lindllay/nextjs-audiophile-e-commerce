import styles from "./_Footer.module.scss";
import Wrapper from "../Wrapper";
import { useRouter } from "next/router";

import Link from "next/link";

const Footer = (props) => {
	const router = useRouter();

	return (
		<section className={styles["footer-background"]}>
			<Wrapper>
				<footer className={styles.footer}>
					<img
						src="/assets/shared/desktop/logo.svg"
						alt="logo"
						className={styles.logo}
					/>
					<p className={styles.paragraph}>
						Audiophile is an all in one stop to fulfill your audio needs. We're
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we’re open 7 days a week.
					</p>
					<p className={styles.copyright}>
						Copyright 2021. All Rights Reserved
					</p>
					<nav className={styles.navigation}>
						<ul className={styles["nav-items"]}>
							<Link
								href={"/"}
								className={
									router.asPath === "/" ? styles.active : styles["nav-item"]
								}
							>
								Home
							</Link>
							<Link
								href={"/headphones"}
								className={
									router.query.productCategory === "headphones"
										? styles.active
										: styles["nav-item"]
								}
							>
								Headphones
							</Link>
							<Link
								href={"/speakers"}
								className={
									router.query.productCategory === "speakers"
										? styles.active
										: styles["nav-item"]
								}
							>
								Speakers
							</Link>
							<Link
								href={"/earphones"}
								className={
									router.query.productCategory === "earphones"
										? styles.active
										: styles["nav-item"]
								}
							>
								Earphones
							</Link>
						</ul>
					</nav>
					<div className={styles.icons}>
						<img
							src="/assets/shared/desktop/icon-facebook.svg"
							alt="facebook icon"
						/>
						<img
							src="/assets/shared/desktop/icon-instagram.svg"
							alt="instagram icon"
						/>
						<img
							src="/assets/shared/desktop/icon-twitter.svg"
							alt="twitter icon"
						/>
					</div>
				</footer>
			</Wrapper>
		</section>
	);
};

export default Footer;
