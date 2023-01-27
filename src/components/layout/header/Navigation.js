import styles from "./Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = (props) => {
	const router = useRouter();

	return (
		<nav>
			<ul className={styles["nav-items"]}>
				<Link
					href={"/"}
					className={router.asPath === "/" ? styles.active : styles["nav-item"]}
				>
					Home
				</Link>
				<Link
					href={"/headphones"}
					className={
						router.query.productCategory === "headphones"
							? styles.active
							: styles["nav-item"]
					}
				>
					Headphones
				</Link>
				<Link
					href={"/speakers"}
					className={
						router.query.productCategory === "speakers"
							? styles.active
							: styles["nav-item"]
					}
				>
					Speakers
				</Link>
				<Link
					href={"/earphones"}
					className={
						router.query.productCategory === "earphones"
							? styles.active
							: styles["nav-item"]
					}
				>
					Earphones
				</Link>
			</ul>
		</nav>
	);
};

export default Navigation;
