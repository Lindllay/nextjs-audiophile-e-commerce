import styles from "./_Header.module.scss";
import Logo from "../../UI/Logo";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import HamburgerIcon from "./HamburgerIcon";
import CartIcon from "../../cart/CartIcon";
import Wrapper from "../Wrapper";
import { useEffect, useState } from "react";
import useDisableBodyScroll from "../../utils/hooks/useDisableBodyScroll";
import Cart from "../../../components/cart/Cart";
import respond from "../../../config";

const Header = (props) => {
	const [isNarrowScreen, setIsNarrowScreen] = useState(false);
	const [isHeaderReduced, setIsHeaderReduced] = useState(false);
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);
	const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
	const [isCartShowed, setIsCartShowed] = useState(false);
	useDisableBodyScroll(isCartShowed);

	const showCartHandler = function () {
		setIsMobileNavOpened(false);
		setIsCartShowed(true);
	};
	const hideCartHandler = function () {
		setIsCartShowed(false);
	};

	const openMobileNavHandler = () => {
		setIsMobileNavOpened((prev) => !prev);
	};

	const closeMobileNavHandler = () => {
		setIsMobileNavOpened(false);
	};

	useDisableBodyScroll(isMobileNavOpened || isCartShowed);

	const hasUnderline = !props.underline;
	const classes = `${styles.header} ${hasUnderline ? styles.underline : ""} ${
		isHeaderReduced && styles.reduce
	} ${isMobileNavOpened && styles.increaseZIndex} ${
		!isHeaderVisible && styles.hidden
	}`;

	useEffect(() => {
		const mediaWatcher = window.matchMedia(`(max-width: ${respond.tabLand})`);
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
			if (entry[0].target === footer && entry[0].isIntersecting)
				setIsHeaderVisible(false);
			if (entry[0].target === footer && !entry[0].isIntersecting)
				setIsHeaderVisible(true);
			if (entry[0].target !== footer)
				setIsHeaderReduced(!entry[0].isIntersecting);
		};

		const topObserver = new IntersectionObserver(callback, options);
		const bottomObserver = new IntersectionObserver(callback, options);
		const pageTop = document.querySelector(".reference");
		const footer = document.getElementById("footer");

		topObserver.observe(pageTop);
		bottomObserver.observe(footer);
	}, []);

	return (
		<header className={classes}>
			{isCartShowed && <Cart onHideCart={hideCartHandler} />}
			<div className={styles["header-reference"]}></div>
			<Wrapper
				className={`${styles["wrapper-header"]} ${
					isNarrowScreen && styles.mobile
				}`}
			>
				{!isNarrowScreen && <Logo />}
				{!isNarrowScreen && <Navigation />}
				{isNarrowScreen && (
					<>
						<HamburgerIcon
							onClick={openMobileNavHandler}
							className={styles.hamburger}
						/>

						<Logo />
					</>
				)}
				{isMobileNavOpened && isNarrowScreen && (
					<MobileNav
						reducedHeader={isHeaderReduced}
						onClose={closeMobileNavHandler}
					/>
				)}

				<CartIcon onClick={showCartHandler} className={styles.icon} />
			</Wrapper>
		</header>
	);
};

export default Header;
