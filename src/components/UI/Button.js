const Button = (props) => {
	const classes = `btn ${props.className}`;

	return (
		<button
			className={classes}
			onClick={props.onClick}
			type={props.type}
			form={props.form}
		>
			{props.children}
		</button>
	);
};

export default Button;
