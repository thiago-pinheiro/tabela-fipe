import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ButtonUi = (props) => {
  return (
    <Stack>
      <Button {...props}>{props.children}</Button>
    </Stack>
  );
};

export default ButtonUi;
