import styles from "./Content.module.css";
import Wrapper from "./Wrapper";

const Content = (props) => {
	const classes = `${styles.background} ${
		props.className ? props.className : ""
	}`;

	return (
		<section className={classes}>
			<Wrapper>{props.children}</Wrapper>
		</section>
	);
};

export default Content;
