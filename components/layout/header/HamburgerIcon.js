import styles from "./_HamburgerIcon.module.scss";

const HamburgerIcon = (props) => {
	return (
		<svg
			className={styles.icon}
			width="16"
			height="15"
			xmlns="http://www.w3.org/2000/svg"
			onClick={props.onClick}
		>
			<g fill="#FFF">
				<path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
			</g>
		</svg>
	);
};

export default HamburgerIcon;
