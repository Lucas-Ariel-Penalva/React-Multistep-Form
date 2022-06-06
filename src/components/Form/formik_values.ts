import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().min(3, "Three letters or longer.").required("Write your name."),
    lastName: Yup.string().min(3, "Three letters or longer").required("Write your last name."),
    email: Yup.string().email("Must be a valid email.").required("Write your email address."),
    password: Yup.string().min(6, "Your password must have at least six characters.").required("Write a password."),
    passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = () => alert("");

export { initialValues, validationSchema, onSubmit };
