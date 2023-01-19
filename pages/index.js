import Hero from "../components/home/Hero";
import Content from "../components/layout/Content";
import Categories from "../components/home/categories/Categories";
import ProductsHome from "../components/home/ProductsHome";

import { Fragment } from "react";
import Gear from "../components/layout/gear/Gear";
import { useRef } from "react";
import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
	return (
		<Fragment>
			<Hero ref={ref} />
			<Content>
				<Categories />
				<ProductsHome />
				<Gear />
			</Content>
		</Fragment>
	);
});

export default Home;
