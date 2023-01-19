import styles from "./_Header.module.scss";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import HamburgerIcon from "./HamburgerIcon";
import CartIcon from "../../cart/CartIcon";
import Wrapper from "../Wrapper";
import { useEffect, useRef, useState } from "react";
import respond from "../../../config";

const Header = (props) => {
	const [isNarrowScreen, setIsNarrowScreen] = useState(false);
	const [isHeaderReduced, setIsHeaderReduced] = useState(false);

	const hasUnderline = !props.underline;
	const classes = `${styles.header} ${hasUnderline ? styles.underline : ""} ${
		isHeaderReduced && styles.reduce
	}`;

	useEffect(() => {
		const mediaWatcher = window.matchMedia(`(max-width: ${respond.tabPort})`);
		setIsNarrowScreen(mediaWatcher.matches);

		const updateIsNarrowScreen = (e) => {
			setIsNarrowScreen(e.matches);
		};
		mediaWatcher.addEventListener("change", updateIsNarrowScreen);

		return function cleanup() {
			mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
		};
	});

	useEffect(() => {
		const options = {
			root: null,
			threshold: 0,
			rootMargin: "25px",
		};

		const callback = (entry) => {
			console.log(entry[0]);
			setIsHeaderReduced(!entry[0].isIntersecting);
		};

		const observer = new IntersectionObserver(callback, options);
		const target = document.querySelector(".reference");

		observer.observe(target);
	}, []);

	return (
		<header className={classes}>
			<div className={styles["header-reference"]}></div>
			<Wrapper className={styles["wrapper-header"]}>
				{!isNarrowScreen && (
					<div className={styles["logo-box"]}>
						<img src="/assets/shared/desktop/logo.svg" alt="logo" />
					</div>
				)}
				{!isNarrowScreen && <Navigation />}
				{isNarrowScreen && <HamburgerIcon />}
				{/* <MobileNav /> */}

				<CartIcon onClick={props.onShowCart} />
			</Wrapper>
		</header>
	);
};

export default Header;
