import styles from "./_Checkout.module.scss";
import CheckoutForm from "./CheckoutForm";
import Summary from "./Summary";

const Checkout = (props) => {
	return (
		<div className={styles.content}>
			<CheckoutForm />
			<Summary />
		</div>
	);
};

export default Checkout;
