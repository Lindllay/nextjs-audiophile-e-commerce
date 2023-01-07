import Link from "next/link";

const NavButton = (props) => {
	const classes = `btn ${props.className}`;
	return (
		<Link href={props.href} className={classes}>
			{props.children}
		</Link>
	);
};

export default NavButton;
