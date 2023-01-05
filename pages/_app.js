import "../styles/globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import useScrollRestoration from "./utils/hooks/useScrollRestoration";
import Cart from "../components/cart/Cart";
import { useState } from "react";
import useDisableBodyScroll from "./utils/hooks/useDisableBodyScroll";

export default function App({ Component, pageProps, router }) {
	useScrollRestoration(router);

	const [isCartShowed, setIsCartShowed] = useState(false);
	useDisableBodyScroll(isCartShowed);

	const showCartHandler = function () {
		setIsCartShowed(true);
	};
	const hideCartHandler = function () {
		setIsCartShowed(false);
	};

	return (
		<>
			{isCartShowed && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
