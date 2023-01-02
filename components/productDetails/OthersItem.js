import styles from "./OthersItem.module.css";
import Button from "../../UI/Button";

const OthersItem = (props) => {
	return (
		<li className={styles.item}>
			<figure className={styles["img-box"]}>
				<img
					src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
					alt="img"
				/>
			</figure>
			<h5 className={styles["heading-5"]}>XX99 Mark</h5>
			<Button className="btn--1">See product</Button>
		</li>
	);
};

export default OthersItem;
