import styles from "./_Logo.module.scss";
import Link from "next/link";

const Logo = (props) => {
	const clasess = `${styles["logo-box"]} ${props.className}`;

	return (
		<Link href="/" className={clasess}>
			<img src="/assets/shared/desktop/logo.svg" alt="logo" />
		</Link>
	);
};

export default Logo;
