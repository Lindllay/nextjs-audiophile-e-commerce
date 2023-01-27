import Content from "../../components/layout/Content";
import CategoryHeader from "../../components/productCategory/CategoryHeader";
import Products from "../../components/productCategory/Products";
import Categories from "../../components/home/categories/Categories";
import Gear from "../../components/layout/gear/Gear";

import fsPromises from "fs/promises";
import path from "path";

const CategoryPage = (props) => {
	const { data, category } = props;
	const sortedData = data.sort((x) => (x.new ? -1 : 1));
	const isDetail = false;

	return (
		<>
			<CategoryHeader category={category} />
			<Content>
				<Products data={sortedData} isDetail={isDetail} />
				<Categories />
				<Gear />
			</Content>
		</>
	);
};

export async function getStaticProps(context) {
	const filePath = path.join(process.cwd(), "/src/data/data.json");
	const data = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(data);

	const category = context.params.productCategory;
	const filteredProducts = objectData.filter(
		(product) => product.category === category
	);

	return {
		props: {
			data: filteredProducts,
			category: category,
		},
	};
}

export async function getStaticPaths() {
	return {
		fallback: false,

		paths: [
			{
				params: {
					productCategory: "headphones",
				},
			},
			{
				params: {
					productCategory: "speakers",
				},
			},
			{
				params: {
					productCategory: "earphones",
				},
			},
		],
	};
}

export default CategoryPage;
