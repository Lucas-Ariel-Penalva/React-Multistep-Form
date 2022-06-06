import { useFormik } from "formik";
import { useState } from "react";
import { FirstPage, SecondPage, ThirdPage } from "../components/Form/FormPages/pageIndex";
import { LinearProgress } from "@mui/material";
import { initialValues, validationSchema, onSubmit } from "../components/Form/formik_values";

import { Container } from "../components/Form/material_imports";
const FormPage = () => {
  const [page, setPage] = useState<number>(1);

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleSubmit, handleChange, errors, touched, values, handleBlur } = formik;
  return (
    <div>
      <h1>Todo lo que quiero va aca en FormPage</h1>
      <Container component="main" maxWidth="xs">
        {page === 1 ? (
          <FirstPage props={{page, setPage, values, errors, touched, handleChange,handleBlur}} />
        ) : page === 2 ? (
          <SecondPage page={page} changePage={setPage} />
        ) : (
          <ThirdPage page={page} changePage={setPage} />
        )}

        <LinearProgress variant="determinate" value={page === 1 ? 5 : page === 2 ? 33 : 66} className="progress-bar" />
      </Container>
      <p>Aca es donde edito el fondo y todo lo demas</p>
    </div>
  );
};

export default FormPage;
