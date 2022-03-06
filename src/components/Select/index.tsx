import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Props } from "./@types";
import { handleEquity, handleGetOption, handleSelect } from "./utils";

function AutoCompleteSelect(props: Props): JSX.Element {
  return (
    <Autocomplete
      value={props.value}
      id={props.id}
      sx={{ width: props.width }}
      onChange={handleSelect(props.onChange)}
      isOptionEqualToValue={handleEquity}
      getOptionLabel={handleGetOption}
      options={props.options}
      loading={props.loading}
      renderInput={(params) => (
        <TextField
          autoFocus={props.autoFocus}
          onClick={props.onClick}
          onBlur={props.onBlur}
          {...params}
          label={props.label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default AutoCompleteSelect;
