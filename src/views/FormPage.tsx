import { useFormik } from "formik";
import { useState } from "react";
import { FirstPage, SecondPage, ThirdPage } from "../components/Form/FormPages/pageIndex";
import { LinearProgress } from "@mui/material";
import { initialValues, validationSchema } from "../components/Form/formik_values";
import { SweetAlert } from "../utils/finalalert";
import { Container } from "../components/Form/material_imports";
import { Footer } from "../components/Footer/Footer";
import { formPropsInterface } from "../types/formTypes";

const FormPage = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      SweetAlert(values);
      setLoading(false);
    }, 2000);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, values, handleBlur, setFieldValue } = formik;

  const formPageProps: formPropsInterface = { values, errors, touched, handleChange, handleBlur, handleSubmit, page, setPage, setFieldValue, loading, checked, setChecked };

  return (
    <div className="main-form-page">
      <h2 className="sign-up">Register in our platform</h2>
      <h4 className="step-reference">Step {page} of 3</h4>
      <Container className="form-container" component="main" maxWidth="xs">
        {page === 1 ? <FirstPage props={formPageProps} /> : page === 2 ? <SecondPage props={formPageProps} /> : <ThirdPage props={formPageProps} />}

        <LinearProgress variant="determinate" value={page === 1 ? 10 : page === 2 ? 45 : 72} className="progress-bar" />
      </Container>
      <Footer />
    </div>
  );
};

export default FormPage;
