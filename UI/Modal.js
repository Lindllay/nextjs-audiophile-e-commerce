import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import React from "react";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
	return (
		<div className={props.className}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const Modal = (props) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const classes = `${styles.modal} ${props.className}`;

	return (
		isLoaded && (
			<React.Fragment>
				{ReactDOM.createPortal(
					<Backdrop className={styles.backdrop} onClick={props.onClick} />,
					document.getElementById("backdrop-root")
				)}
				{ReactDOM.createPortal(
					<ModalOverlay className={classes}>{props.children}</ModalOverlay>,
					document.getElementById("overlay-root")
				)}
			</React.Fragment>
		)
	);
};

export default Modal;
