import styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = (props) => {
	return (
		<nav>
			<ul className={styles["nav-items"]}>
				<Link href={"/"} className={styles["nav-item"]}>
					Home
				</Link>
				<Link href={"/headphones"} className={styles["nav-item"]}>
					Headphones
				</Link>
				<Link href={"/speakers"} className={styles["nav-item"]}>
					Speakers
				</Link>
				<Link href={"/earphones"} className={styles["nav-item"]}>
					Earphones
				</Link>
			</ul>
		</nav>
	);
};

export default Navigation;
