import "../styles/globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import useScrollRestoration from "./utils/hooks/useScrollRestoration";

export default function App({ Component, pageProps, router }) {
	useScrollRestoration(router);
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
