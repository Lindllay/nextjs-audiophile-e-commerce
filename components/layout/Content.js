import styles from "./Content.module.css";
import Wrapper from "./Wrapper";

const Content = (props) => {
	return (
		<section className={styles.background}>
			<Wrapper>{props.children}</Wrapper>
		</section>
	);
};

export default Content;
