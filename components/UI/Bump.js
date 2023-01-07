import styles from "./Bump.module.css";

const Bump = (props) => {
	const classes = `${styles.picture} ${props.bump ? `${styles.bump}` : ""}`;
	return (
		<picture className={classes}>
			<img src="/jago.jpg" alt="" />
		</picture>
	);
};

export default Bump;
