import { Option } from "../Select/@types";
import FormikField from "../Field";
import { TextField } from "@material-ui/core";
import { HTMLInputTypeAttribute, memo } from "react";

interface IProps {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
}
function FormikInput({ name, label, type }: IProps) {
  return (
    <FormikField
      component={function ({
        value,
        setFieldValue,
        setFieldTouched,
      }: {
        value: Option;
        setFieldValue: any;
        setFieldTouched: any;
      }) {
        return (
          <TextField
            value={value}
            onChange={(e) => setFieldValue(name, e.target.value)}
            onBlur={() => setFieldTouched(name, true)}
            label={label}
            type={type}
            variant={"outlined"}
            style={{
              width: "100%",
            }}
          />
        );
      }}
      name={name}
    />
  );
}

export default memo(FormikInput);
