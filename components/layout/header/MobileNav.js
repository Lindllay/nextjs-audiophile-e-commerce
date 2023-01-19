import styles from "./_MobileNav.module.scss";
import Categories from "../../home/categories/Categories";
import Modal from "../../UI/Modal";

const MobileNav = (props) => {
	return (
		<Modal
			onClick={props.onClose}
			className={`${styles.mobileNav} ${props.reducedHeader && styles.reduce}`}
		>
			<Categories onClick={props.onClose} />
		</Modal>
	);
};

export default MobileNav;
