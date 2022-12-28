import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
	const classes = `${styles.wrapper} ${props.className ? props.className : ""}`;

	return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
