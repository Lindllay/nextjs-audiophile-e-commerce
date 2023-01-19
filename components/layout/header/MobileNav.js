import styles from "./_MobileNav.module.scss";
import Categories from "../../home/categories/Categories";
import Modal from "../../UI/Modal";

const MobileNav = () => {
	return (
		<Modal className={styles.mobileNav}>
			<Categories />
		</Modal>
	);
};

export default MobileNav;
