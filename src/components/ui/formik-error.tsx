/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaCheck, FaExclamationCircle } from "react-icons/fa";

const FormikError = ({
  formik,
  inputName,
  topPosition,
}: {
  formik: any;
  inputName: string;
  topPosition: string;
}) => {
  return (
    <>
      {formik.touched[inputName] && formik.errors[inputName] ? (
        <FaExclamationCircle
          className={`absolute right-3 ${topPosition} transform -translate-y-1/2 text-red-500 text-lg`}
        />
      ) : formik.touched[inputName] && !formik.errors[inputName] ? (
        <FaCheck
          className={`absolute right-3 ${topPosition} transform -translate-y-1/2 text-green-500 text-lg`}
        />
      ) : null}
    </>
  );
};

export default FormikError;
