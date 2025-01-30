/* eslint-disable @typescript-eslint/no-explicit-any */
import FormikError from "./formik-error";

const Input = ({
  formik,
  inputName,
  inputType = "text",
  label,
  placeholder,
  topPosition,
}: {
  formik: any;
  inputName: string;
  inputType?: string;
  label: string;
  placeholder: string;
  topPosition: string;
}) => {
  return (
    <>
      <label htmlFor={inputName} className="sr-only">
        {label}
      </label>
      <input
        id={inputName}
        type={inputType}
        name={inputName}
        value={formik.values[inputName]}
        onChange={(e) => {
          formik.setFieldTouched(inputName, true, false);
          formik.handleChange(e);
        }}
        placeholder={placeholder}
        className={`w-full bg-background text-sm md:text-base text-foreground border-b border-muted-foreground font-semibold focus:outline-none focus:border-b-2 pr-10 rounded-none ${
          formik.touched[inputName] && formik.errors[inputName]
            ? "!border-red-500"
            : null
        }`}
      />
      <FormikError
        formik={formik}
        inputName={inputName}
        topPosition={topPosition}
      />
    </>
  );
};

export default Input;
