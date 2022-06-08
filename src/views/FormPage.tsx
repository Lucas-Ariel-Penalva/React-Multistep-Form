import { useFormik } from "formik";
import { useState } from "react";
import { FirstPage, SecondPage, ThirdPage } from "../components/Form/FormPages/pageIndex";
import { LinearProgress } from "@mui/material";
import { initialValues, validationSchema } from "../components/Form/formik_values";

import { Container } from "../components/Form/material_imports";
const FormPage = () => {
  const [page, setPage] = useState<number>(1);

  const onSubmit = () => {
    alert("End! Here goes the swal with the data");
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, values, handleBlur, setFieldValue } = formik;

  const formPageProps = { values, errors, touched, handleChange, handleBlur, handleSubmit, page, setPage, setFieldValue };

  return (
    <div className="main-form-page">


      <h2 className="sign-up">Sign-up to our platform</h2>
      <h4 className="step-reference">Step {page} of 3</h4>
      <Container className="form-container"  component="main" maxWidth="xs">



        {page === 1 ? <FirstPage props={formPageProps} /> : page === 2 ? <SecondPage props={formPageProps} /> : <ThirdPage props={formPageProps} />}

        <LinearProgress variant="determinate" value={page === 1 ? 10 : page === 2 ? 45 : 72} className="progress-bar" />
      </Container>
    </div>
  );
};

export default FormPage;
