import * as Yup from "yup";
import { formStateInterface } from "../../types/formTypes";

const initialValues: formStateInterface = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: null,
  gender: null,
  expertise: null,
  experience: null,
  workHours: null,
  workModality: null,
  relocation: null,
};

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Three letters or longer.")
      .matches(/^[aA-zZ\s]+$/, "Must only contain letters.")
      .max(25, "Less than 25 letters.")
      .required("Write your name."),
    lastName: Yup.string()
      .min(3, "Three letters or longer")
      .matches(/^[aA-zZ\s]+$/, "Must only contain letters.")
      .max(25, "Less than 25 letters.")
      .required("Write your last name."),
    email: Yup.string().email("Must be a valid email.").required("Write your email address."),
    password: Yup.string().min(6, "Your password must have at least six characters.").max(25, "Less than 25 characters.").required("Write a password."),
    confirmPassword: Yup.string()
      .min(6, "Your password must have at least six characters.")
      .max(25, "Less than 25 characters.")
      .required("Write a password.")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    country: Yup.object().shape({ code: Yup.string(), label: Yup.string(), phone: Yup.string() }).required("Pick where you are living right now."),
    gender: Yup.string().required("Does this really matter?"),
    experience: Yup.string().required("Specify your level of work experience."),
    expertise:Yup.string().required("Specify your area of expertise."),
    workHours: Yup.string().required("Pick what type of job you are looking for."),
    workModality: Yup.string().required("Pick your preferred work modality."),
    relocation: Yup.string().required("Tell us if you are willing to relocate."),
  });

export { initialValues, validationSchema };
