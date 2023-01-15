import Link from "next/link";

const NavButton = (props) => {
	const classes = `btn ${props.className}`;
	return (
		<Link href={props.href} className={classes} onClick={props.onClick}>
			{props.children}
		</Link>
	);
};

export default NavButton;
