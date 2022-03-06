import { Option } from "./@types";
import { SyntheticEvent } from "react";

export const handleEquity = (option: Option, value: Option) =>
  option && value ? option.id === value.id : false;

export const handleGetOption = (option: Option) => (option ? option.label : "");

export const handleSelect =
  (onChange: (value: Option) => void) =>
  (event: SyntheticEvent<Element, Event>, value: Option) =>
    onChange(value);
