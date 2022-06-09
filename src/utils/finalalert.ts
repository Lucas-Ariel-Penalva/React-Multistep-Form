import Swal from "sweetalert2";
import { formStateInterface } from "../types/formTypes";

const SweetAlert = (val: formStateInterface) => {
  return Swal.fire({
    title: "Success!",
    icon: "success",
    text: "I built this multi-step form to practice React, Typescript, Material UI, Formik and Yup. I added a delay on the final submit to imitate an API call but the data wasn't sent anywhere.",
    confirmButtonColor: "#1363df",
    confirmButtonText: "Close",
    color: "#178dee",
  });
};

export { SweetAlert };
