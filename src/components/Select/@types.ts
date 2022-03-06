export interface IOption {
  label: string;
  id: string | number;
}

export type Option = IOption | null;

export interface Props {
  id: string;
  label: string;
  width: number | string | undefined;
  loading: boolean;
  autoFocus?: boolean;
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
  onClick?: () => void;
  onBlur?: () => void;
}
