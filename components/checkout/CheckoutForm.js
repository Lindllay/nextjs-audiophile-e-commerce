import styles from "./_CheckoutForm.module.scss";
import * as yup from "yup";
import { useState } from "react";
import Popup from "./Popup";
import useDisableBodyScroll from "../utils/hooks/useDisableBodyScroll";

import { useFormik } from "formik";

const CheckoutForm = (props) => {
	const [isModalShowed, setIsModalShowed] = useState(false);
	useDisableBodyScroll(isModalShowed);

	const hideCartHandler = function () {
		setIsModalShowed(false);
	};

	const onSubmit = (e) => {
		console.log(e);
		setIsModalShowed(true);
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				nameInput: "",
				email: "",
				phone: "",
				address: "",
				zip: "",
				city: "",
				country: "",
				emoneyRadio: "true",
				accnumber: "",
				pin: "",
			},
			validationSchema: yup.object().shape({
				nameInput: yup.string().required("Required"),
				email: yup
					.string()
					.email("Please enter a valid email")
					.required("Required"),
				phone: yup.number().positive().integer().required("Required"),
				address: yup.string().required("Required"),
				zip: yup.string().required("Required"),
				city: yup.string().required("Required"),
				country: yup.string().required("Required"),
				emoneyRadio: yup.boolean(),
				accnumber: yup.number().when("emoneyRadio", {
					is: true,
					then: yup.number().required("Required"),
					otherwise: yup.number(),
				}),
				pin: yup.number().when("emoneyRadio", {
					is: true,
					then: yup.number().required("Required"),
					otherwise: yup.number(),
				}),
			}),
			onSubmit,
		});

	return (
		<>
			{isModalShowed && <Popup onHideCart={hideCartHandler} />}
			<form onSubmit={handleSubmit} className={styles.form} id="form">
				<h3 className={styles["heading-3"]}>Checkout</h3>
				<p className={styles.subtitle}>Billing Details</p>
				<div className={styles.grid}>
					<div className={styles["form-control"]}>
						<label
							className={`${styles.label} ${
								errors.nameInput && touched.nameInput && styles.error
							} }`}
							htmlFor="nameInput"
						>
							<p>Name</p>
							{errors.nameInput && touched.nameInput && (
								<p className={styles["error-message"]}>{errors.nameInput}</p>
							)}
						</label>

						<input
							value={values.nameInput}
							id="nameInput"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Alexei Ward"
							className={`${styles.input} ${
								errors.nameInput && touched.nameInput && styles["input-error"]
							}`}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label
							className={`${styles.label} ${
								errors.email && touched.email && styles.error
							} }`}
							htmlFor="email"
						>
							<p>Email</p>
							{errors.email && touched.email && (
								<p className={styles["error-message"]}>{errors.email}</p>
							)}
						</label>
						<input
							value={values.email}
							id="email"
							type="email"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="alexei@mail.com"
							className={`${styles.input} ${
								errors.email && touched.email && styles["input-error"]
							}`}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label
							className={`${styles.label} ${
								errors.phone && touched.phone && styles.error
							} }`}
							htmlFor="phone"
						>
							<p>Phone Number</p>
							{errors.phone && touched.phone && (
								<p className={styles["error-message"]}>{errors.phone}</p>
							)}
						</label>
						<input
							value={values.phone}
							id="phone"
							type="number"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="+1 202-555-0136"
							className={`${styles.input} ${
								errors.phone && touched.phone && styles["input-error"]
							}`}
						/>
					</div>
				</div>
				<p className={styles.subtitle}>Shipping info</p>
				<div className={styles.grid}>
					<div className={`${styles["form-control"]} ${styles.address}`}>
						<label
							className={`${styles.label} ${
								errors.address && touched.address && styles.error
							} }`}
							htmlFor="address"
						>
							<p>Address</p>
							{errors.address && touched.address && (
								<p className={styles["error-message"]}>{errors.address}</p>
							)}
						</label>
						<input
							value={values.address}
							id="address"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="1137 Williams Avenue"
							className={`${styles.input} ${
								errors.address && touched.address && styles["input-error"]
							}`}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label
							className={`${styles.label} ${
								errors.zip && touched.zip && styles.error
							} }`}
							htmlFor="zip"
						>
							<p>ZIP Code</p>
							{errors.zip && touched.zip && (
								<p className={styles["error-message"]}>{errors.zip}</p>
							)}
						</label>
						<input
							value={values.zip}
							id="zip"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="10001"
							className={`${styles.input} ${
								errors.zip && touched.zip && styles["input-error"]
							}`}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label
							className={`${styles.label} ${
								errors.city && touched.city && styles.error
							} }`}
							htmlFor="city"
						>
							<p>City</p>
							{errors.city && touched.city && (
								<p className={styles["error-message"]}>{errors.city}</p>
							)}
						</label>
						<input
							value={values.city}
							id="city"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="New York"
							className={`${styles.input} ${
								errors.city && touched.city && styles["input-error"]
							}`}
						/>
					</div>
					<div className={styles["form-control"]}>
						<label
							className={`${styles.label} ${
								errors.country && touched.country && styles.error
							} }`}
							htmlFor="country"
						>
							<p>Country</p>
							{errors.country && touched.country && (
								<p className={styles["error-message"]}>{errors.country}</p>
							)}
						</label>
						<input
							value={values.country}
							id="country"
							type="text"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="United States"
							className={`${styles.input} ${
								errors.country && touched.country && styles["input-error"]
							}`}
						/>
					</div>
				</div>
				<p className={styles.subtitle}>Payment Details</p>
				<div className={styles.grid}>
					<p className={styles["payment-method"]}>Payment Method</p>
					<div
						className={`${styles["form-control"]} ${styles["e-money-radio"]}`}
					>
						<input
							value={true}
							id="emoney"
							type="radio"
							onChange={handleChange}
							className={styles["radio-input"]}
							defaultChecked
							name="emoneyRadio"
						/>
						<label className={styles["radio-label"]} htmlFor="emoney">
							<span className={styles["radio-button"]}></span>
							<span className={styles["radio-label-text"]}>e-Money</span>
						</label>
					</div>
					<div className={`${styles["form-control"]} ${styles["cash-radio"]}`}>
						<input
							value={false}
							id="cash"
							type="radio"
							onChange={handleChange}
							className={styles["radio-input"]}
							name="emoneyRadio"
						/>
						<label className={styles["radio-label"]} htmlFor="cash">
							<span className={styles["radio-button"]}></span>
							<span className={styles["radio-label-text"]}>
								Cash on Delivery
							</span>
						</label>
					</div>
					{values.emoneyRadio === "true" ? (
						<>
							<div
								className={`${styles["form-control"]} ${styles["e-money-number"]} `}
							>
								<label
									className={`${styles.label} ${
										errors.accnumber && touched.accnumber && styles.error
									} }`}
									htmlFor="accnumber"
								>
									<p>e-Money Number</p>
									{errors.accnumber && touched.accnumber && (
										<p className={styles["error-message"]}>
											{errors.accnumber}
										</p>
									)}
								</label>
								<input
									value={values.accnumber}
									id="accnumber"
									type="number"
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="238521993"
									className={`${styles.input} ${
										errors.accnumber &&
										touched.accnumber &&
										styles["input-error"]
									}`}
								/>
							</div>
							<div
								className={`${styles["form-control"]} ${styles["e-money-pin"]} `}
							>
								<label
									className={`${styles.label} ${
										errors.pin && touched.pin && styles.error
									} }`}
									htmlFor="pin"
								>
									<p>e-Money PIN</p>
									{errors.pin && touched.pin && (
										<p className={styles["error-message"]}>{errors.pin}</p>
									)}
								</label>
								<input
									value={values.pin}
									id="pin"
									type="number"
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="6891"
									className={`${styles.input} ${
										errors.pin && touched.pin && styles["input-error"]
									}`}
								/>
							</div>
						</>
					) : (
						""
					)}
				</div>
				{values.emoneyRadio === "false" ? (
					<div className={styles["cash-on-delivery"]}>
						<img
							src="/assets/checkout/icon-cash-on-delivery.svg"
							alt="checkout-icon"
							className={styles["icon-cash"]}
						/>
						<p className={styles.paragraph}>
							The ‘Cash on Delivery’ option enables you to pay in cash when our
							delivery courier arrives at your residence. Just make sure your
							address is correct so that your order will not be cancelled.
						</p>
					</div>
				) : (
					""
				)}
			</form>
		</>
	);
};

export default CheckoutForm;
