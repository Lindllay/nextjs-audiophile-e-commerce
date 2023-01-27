import styles from "./_Categories.module.scss";
import Category from "./Category";

const Categories = (props) => {
	return (
		<section className={styles.categories} id="categories">
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
				categoryName="headphones"
				onClick={props.onClick}
			/>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
				categoryName="speakers"
				onClick={props.onClick}
			/>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
				categoryName="earphones"
				onClick={props.onClick}
			/>
		</section>
	);
};

export default Categories;
