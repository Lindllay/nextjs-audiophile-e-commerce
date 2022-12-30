import styles from "./Header.module.css";
import Navigation from "./Navigation";
import CartIcon from "../../cart/CartIcon";
import Wrapper from "../Wrapper";
import { useRouter } from "next/router";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<Wrapper className={styles["wrapper-header"]}>
				<div className={styles["logo-box"]}>
					<img src="/assets/shared/desktop/logo.svg" alt="logo" />
				</div>
				<Navigation />
				<CartIcon />
			</Wrapper>
		</header>
	);
};

export default Header;
