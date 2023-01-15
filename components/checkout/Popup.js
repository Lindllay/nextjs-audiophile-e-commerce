import styles from "./Popup.module.css";
import Modal from "../UI/Modal";

const Popup = (props) => {
	return (
		<Modal className={styles.popup} onClick={props.onHideCart}>
			<div>Thank you for your order</div>
		</Modal>
	);
};

export default Popup;
