import "../styles/globals.css";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

export default function App({ Component, pageProps }) {
	return (
		<>
			{" "}
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
