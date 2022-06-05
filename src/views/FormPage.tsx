import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import  {FirstPage, SecondPage, ThirdPage}  from "../components/Form/FormPages/pageIndex";

const FormPage = () => {
  const [page, setPage] = useState<number>(1);
  /*
Aca va el estado, y se lo voy pasando a los componentes
Aca va formik y Yup

Aca va la barra de progreso de MUI

Aca va background color, y el header
Aca va la funcion para pasar de pagina y los botones 
 */

  return (
    <div>
      <h1>Todo lo que quiero va aca en FormPage</h1>
      {page === 1 ? <FirstPage /> : page === 2 ? <SecondPage /> : <ThirdPage />}
      <p>Aca es donde edito el fondo y todo lo demas</p>
    </div>
  );
};

export default FormPage;
