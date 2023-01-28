import "../../src/styles/globals.scss";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import useScrollRestoration from "../components/hooks/useScrollRestoration";
import CartProvider from "../components/store/CartProvider";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, router }) {
	useScrollRestoration(router);

	const query = useRouter();
	const { pathname } = query;

	const underline = pathname === "/[productCategory]/[productDetails]";

	return (
		<CartProvider>
			<Header underline={underline} />
			<Component {...pageProps} />
			<Footer />
		</CartProvider>
	);
}
