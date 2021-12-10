import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const AutoSelect = (props) => {
  return (
    <Autocomplete
      disablePortal
      id="autoselect"
      options={props.options}
      sx={{ width: 300 }}
      value={props.value}
      onChange={props.onChange}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
};

export default AutoSelect;
