import styles from "./Categories.module.css";
import Category from "./Category";

const Categories = (props) => {
	return (
		<section className={styles.categories}>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
				categoryName="Headphones"
			/>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
				categoryName="Speakers"
			/>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
				categoryName="Earphones"
			/>
		</section>
	);
};

export default Categories;
