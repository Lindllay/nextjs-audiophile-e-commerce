import Product from "../../components/productCategory/Product";
import Content from "../../components/layout/Content";
import Features from "../../components/productDetails/Features";
import Gallery from "../../components/productDetails/Gallery";
import Categories from "../../components/home/categories/Categories";
import Gear from "../../components/layout/gear/Gear";

const DetailsPage = (props) => {
	return (
		<>
			<div className="header-background"></div>
			<Content>
				<Product
					margin={true}
					image={{
						desktop:
							"http://localhost:3000/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
					}}
					description={
						"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
					}
					id={1}
					key={1}
					name="XX99 MARK II HEADPHONES"
					new={true}
					price={123}
					isDetail={true}
				></Product>
				<Features />
				<Gallery />
				<Categories />
				<Gear />
			</Content>
		</>
	);
};

export default DetailsPage;
