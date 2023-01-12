import * as yup from "yup";

export const basicSchema = yup.object().shape({
	nameInput: yup.string().required("Required"),
	email: yup.string().email("Please enter a valid email").required("Required"),
	phone: yup.number().positive().integer().required("Required"),
	address: yup.string().required("Required"),
	zip: yup.string().required("Required"),
	city: yup.string().required("Required"),
	country: yup.string().required("Required"),
	accnumber: yup.number().required("Required"),
	pin: yup.number().required("Required"),
});

// address
