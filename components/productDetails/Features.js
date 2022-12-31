import styles from "./Features.module.css";
import ListItem from "./ListItem";

const Features = (props) => {
	return (
		<section className={styles.features}>
			<div className={styles["features-box"]}>
				<h3 className={styles["heading-3"]}>Features</h3>
				<p className={styles.paragraph}>
					Featuring a genuine leather head strap and premium earcups, these
					headphones deliver superior comfort for those who like to enjoy
					endless listening. It includes intuitive controls designed for any
					situation. Whether you’re taking a business call or just in your own
					personal space, the auto on/off and pause features ensure that you’ll
					never miss a beat.
				</p>
				<p className={styles.paragraph}>
					The advanced Active Noise Cancellation with built-in equalizer allow
					you to experience your audio world on your terms. It lets you enjoy
					your audio in peace, but quickly interact with your surroundings when
					you need to. Combined with Bluetooth 5. 0 compliant connectivity and
					17 hour battery life, the XX99 Mark II headphones gives you superior
					sound, cutting-edge technology, and a modern design aesthetic.
				</p>
			</div>
			<div className={styles["itb-box"]}>
				<h3 className={styles["heading-3"]}>In the box</h3>
				<ul className={styles.list}>
					<ListItem />
					<ListItem />
					<ListItem />
				</ul>
			</div>
		</section>
	);
};

export default Features;
