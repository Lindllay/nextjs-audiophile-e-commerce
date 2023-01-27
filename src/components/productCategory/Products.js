import styles from "./_Products.module.scss";
import ProductCategory from "./ProductCategory";

const Products = (props) => {
	return (
		<div className={styles.products}>
			<ul className={styles.items}>
				{props.data.map((product) => (
					<ProductCategory
						slug={product.slug}
						image={product.categoryImage}
						description={product.description}
						id={product.id}
						key={product.id}
						name={product.name}
						new={product.new}
						price={product.price}
						isDetail={props.isDetail}
						category={product.category}
						cartName={product.cartName}
					/>
				))}
			</ul>
		</div>
	);
};

export default Products;
