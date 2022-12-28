import Hero from "../components/home/Hero";
import Content from "../components/layout/Content";
import Categories from "../components/home/categories/Categories";
import ProductsHome from "../components/home/ProductsHome";

import { Fragment } from "react";
import Gear from "../components/layout/gear/Gear";

const Home = (props) => {
	return (
		<Fragment>
			<Hero />
			<Content>
				<Categories />
				<ProductsHome />
				<Gear />
			</Content>
		</Fragment>
	);
};

export default Home;
