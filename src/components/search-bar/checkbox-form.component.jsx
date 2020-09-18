import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxForm = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={handleChange} color="primary" />
      }
      label="I am creator"
    />
  );
};

export default CheckboxForm;
