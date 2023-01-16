import "../styles/globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import useScrollRestoration from "../components/utils/hooks/useScrollRestoration";
import useDisableBodyScroll from "../components/utils/hooks/useDisableBodyScroll";
import Cart from "../components/cart/Cart";
import { useState } from "react";
import CartProvider from "../components/store/CartProvider";
import { useRouter } from "next/router";

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

	const query = useRouter();
	const { pathname } = query;

	const transparentBg = pathname === "/";
	const underline = pathname === "/[productCategory]/[productDetails]";

	return (
		<CartProvider>
			{isCartShowed && <Cart onHideCart={hideCartHandler} />}
			<Header
				onShowCart={showCartHandler}
				transparentBg={transparentBg}
				underline={underline}
			/>
			<Component {...pageProps} />
			<Footer />
		</CartProvider>
	);
}
