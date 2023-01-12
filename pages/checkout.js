import Content from "../components/layout/Content";
import Checkout from "../components/checkout/Checkout";

const CheckoutPage = (props) => {
	return (
		<Content className="bg-checkout">
			<Checkout />
		</Content>
	);
};

export default CheckoutPage;
