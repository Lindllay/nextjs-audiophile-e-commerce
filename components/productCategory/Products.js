import styles from "./Products.module.css";
import Product from "./Product";

const Products = (props) => {
	return (
		<div className={styles.products}>
			<ul className={styles.items}>
				{props.data.map((product) => (
					<Product
						image={product.categoryImage}
						description={product.description}
						id={product.id}
						key={product.id}
						name={product.name}
						new={product.new}
						price={product.price}
					/>
				))}
			</ul>
		</div>
	);
};

export default Products;
