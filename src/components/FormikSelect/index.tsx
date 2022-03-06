import { Option } from "../Select/@types";
import AutoCompleteSelect from "../Select";
import FormikField from "../Field";

interface IProps {
  name: string;
  label: string;
  id: string;
  options: Option[];
  loading: boolean;
}
function FormikSelect({ name, options, label, id, loading }: IProps) {
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
          <AutoCompleteSelect
            onBlur={() => {
              setFieldTouched(name, true);
            }}
            label={label}
            value={value}
            width={"auto"}
            options={options}
            onChange={(value) => {
              setFieldValue(name, value);
            }}
            loading={loading}
            id={id}
          />
        );
      }}
      name={name}
    />
  );
}

export default FormikSelect;
