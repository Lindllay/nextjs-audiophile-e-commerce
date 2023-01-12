import styles from "./TextInput.module.css";

const TextInput = (props) => {
	const classes = `${styles["form-control"]} ${props.className}`;

	return (
		<div className={classes}>
			<label htmlFor={props.name}>{props.name}</label>
			<input
				type={props.type}
				id={props.name}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default TextInput;
