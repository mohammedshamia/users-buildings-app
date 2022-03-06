import { Field, FieldProps } from "formik";
import React from "react";
import styles from "./styles.module.css";

interface IProps<T> {
  name: string;
  component: React.FC<{ value: T; setFieldValue: any; setFieldTouched: any }>;
}

function FormikField<T>(props: IProps<T>) {
  const Component = props.component;
  return (
    <Field name={props.name}>
      {({
        field: { value },
        form: { setFieldValue, errors, touched, setFieldTouched },
      }: FieldProps) => (
        <>
          <Component {...{ value, setFieldValue, setFieldTouched }} />
          {errors[props.name] && touched[props.name] && (
            <div className={styles.error}>{errors[props.name]}</div>
          )}
        </>
      )}
    </Field>
  );
}

export default FormikField;
