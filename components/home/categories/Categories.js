import styles from "./Categories.module.css";
import Category from "./Category";
import Link from "next/link";

const Categories = (props) => {
	return (
		<section className={styles.categories}>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
				categoryName="headphones"
			/>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
				categoryName="speakers"
			/>
			<Category
				image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
				categoryName="earphones"
			/>
		</section>
	);
};

export default Categories;
