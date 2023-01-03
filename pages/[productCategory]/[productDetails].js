import Product from "../../components/productCategory/Product";
import Content from "../../components/layout/Content";
import Features from "../../components/productDetails/Features";
import Gallery from "../../components/productDetails/Gallery";
import Others from "../../components/productDetails/Others";
import Categories from "../../components/home/categories/Categories";
import Gear from "../../components/layout/gear/Gear";

import fsPromises from "fs/promises";
import path from "path";

const DetailsPage = (props) => {
	const data = props.productDetails[0];

	return (
		<>
			<div className="header-background"></div>
			<Content>
				<Product
					margin={true}
					image={data.image}
					description={data.description}
					id={data.id}
					key={data.id}
					name={data.name}
					new={data.new}
					price={data.price}
					isDetail={true}
				></Product>
				<Features features={data.features} includes={data.includes} />
				<Gallery gallery={data.gallery} name={data.name} />
				<Others others={data.others} category={data.category} />
				<Categories />
				<Gear />
			</Content>
		</>
	);
};

export async function getStaticProps(context) {
	const filePath = path.join(process.cwd(), "data.json");
	const data = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(data);

	const query = context.params.productDetails;
	const productData = objectData.filter((product) => product.slug === query);

	return {
		props: {
			productDetails: productData,
		},
	};
}

export async function getStaticPaths() {
	const filePath = path.join(process.cwd(), "data.json");
	const data = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(data);

	const pathsArray = objectData.map((product) => ({
		params: {
			productCategory: product.category,
			productDetails: product.slug,
		},
	}));

	return {
		fallback: false,
		paths: pathsArray,
	};
}

export default DetailsPage;
