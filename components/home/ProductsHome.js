import styles from "./ProductsHome.module.css";
import NavButton from "../UI/NavButton";

const ProductsHome = (props) => {
	return (
		<section className={styles.container}>
			<div className={styles["zx9-container"]}>
				<img
					className={styles.circles}
					src="assets/home/desktop/pattern-circles.svg"
					alt="circles"
				/>
				<figure className={styles.figure}>
					<img src="assets/home/desktop/image-speaker-zx9.png" alt="zx9" />
				</figure>
				<div>
					<h1 className={styles["heading-1"]}>ZX9 Speaker</h1>
					<p className={styles.paragraph}>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>

					<NavButton href={"/speakers/zx9-speaker"} className="btn--3">
						See product
					</NavButton>
				</div>
			</div>
			<div className={styles["zx7-container"]}>
				<div>
					<h4 className={styles["heading-4"]}>ZX7 Speaker</h4>

					<NavButton href={"/speakers/zx7-speaker"} className="btn--2">
						See product
					</NavButton>
				</div>
			</div>
			<div className={styles["yx1-container"]}>
				<figure></figure>
				<div>
					<h4 className={styles["heading-4"]}>YX1 Earphones</h4>

					<NavButton href={"/earphones/yx1-earphones"} className="btn--2">
						See product
					</NavButton>
				</div>
			</div>
		</section>
	);
};

export default ProductsHome;
