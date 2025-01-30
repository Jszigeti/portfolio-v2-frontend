/* eslint-disable @typescript-eslint/no-explicit-any */
import FormikError from "./formik-error";

const TextArea = ({
  formik,
  inputName,
  label,
  placeholder,
  topPosition,
}: {
  formik: any;
  inputName: string;
  label: string;
  placeholder: string;
  topPosition: string;
}) => {
  return (
    <>
      <label htmlFor={inputName} className="sr-only">
        {label}
      </label>
      <textarea
        id={inputName}
        name={inputName}
        value={formik.values[inputName]}
        onChange={(e) => {
          formik.setFieldTouched(inputName, true, false);
          formik.handleChange(e);
        }}
        placeholder={placeholder}
        className={`w-full xs:h-28 h-36 md:h-44 bg-background text-foreground border-b border-muted-foreground font-semibold focus:outline-none focus:border-b-2 pr-10 text-sm md:text-base rounded-none ${
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
