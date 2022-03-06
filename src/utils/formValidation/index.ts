import { object, SchemaOf, string } from "yup";
import { IOption } from "../../components/Select/@types";

export const addBuilding: SchemaOf<{
  name: string;
  location: IOption;
}> = object({
  name: string().required("Name is required"),
  location: object()
    .shape({
      label: string().required(),
      id: string().required(),
    })
    .required()
    .typeError("Please select a country"),
});
