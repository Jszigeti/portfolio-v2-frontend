/* eslint-disable @typescript-eslint/no-explicit-any */
import FormikError from "./formikError";

const TextArea = ({
  formik,
  inputName,
  placeholder,
  topPosition,
}: {
  formik: any;
  inputName: string;
  placeholder: string;
  topPosition: string;
}) => {
  return (
    <>
      <textarea
        name={inputName}
        value={formik.values[inputName]}
        onChange={(e) => {
          formik.setFieldTouched(inputName, true, false);
          formik.handleChange(e);
        }}
        placeholder={placeholder}
        className={`w-full h-60 bg-background text-foreground border-b border-muted-foreground font-semibold focus:outline-none focus:border-b-2 pr-10 ${
          formik.touched[inputName] && formik.errors[inputName]
            ? "!border-red-500"
            : null
        }`}
      />
      <FormikError
        formik={formik}
        inputName="message"
        topPosition={topPosition}
      />
    </>
  );
};

export default TextArea;
