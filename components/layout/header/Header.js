import styles from "./Header.module.css";
import Navigation from "./Navigation";
import CartIcon from "../../cart/CartIcon";
import Wrapper from "../Wrapper";

const Header = (props) => {
	const isTransparent = props.transparentBg;
	const hasUnderline = !props.underline;
	const classes = `${styles.header} ${
		isTransparent ? styles.transparent : ""
	} ${hasUnderline ? styles.underline : ""}`;

	return (
		<header className={classes}>
			<Wrapper className={styles["wrapper-header"]}>
				<div className={styles["logo-box"]}>
					<img src="/assets/shared/desktop/logo.svg" alt="logo" />
				</div>
				<Navigation />
				<CartIcon onClick={props.onShowCart} />
			</Wrapper>
		</header>
	);
};

export default Header;
