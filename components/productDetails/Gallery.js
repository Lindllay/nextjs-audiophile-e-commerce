import styles from "./Gallery.module.css";

const Gallery = (props) => {
	return (
		<section className={styles.gallery}>
			<figure className={`${styles["img-box"]} ${styles["img-1"]}`}>
				<img
					src="http://localhost:3000/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
					alt=""
				/>
			</figure>
			<figure className={`${styles["img-box"]} ${styles["img-2"]}`}>
				<img
					src="http://localhost:3000/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
					alt=""
				/>
			</figure>
			<figure className={`${styles["img-box"]} ${styles["img-3"]}`}>
				<img
					src="http://localhost:3000/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
					alt=""
				/>
			</figure>
		</section>
	);
};

export default Gallery;
