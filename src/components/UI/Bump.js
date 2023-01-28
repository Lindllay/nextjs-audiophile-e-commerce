import styles from "./_Bump.module.scss";

const Bump = (props) => {
	const classes = `${styles.container} ${props.bump ? `${styles.bump}` : ""}`;
	return (
		<div className={classes}>
			<p className={styles.paragraph}> &#10004; &nbsp; Item Added!</p>
		</div>
	);
};

export default Bump;
