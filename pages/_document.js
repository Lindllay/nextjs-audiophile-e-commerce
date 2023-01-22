import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Audiophile</title>
				</Head>
				<body>
					<div className="reference"></div>
					<Main />
					<div id="backdrop-root"></div>
					<div id="overlay-root" />
					<NextScript />
				</body>
			</Html>
		);
	}
}
