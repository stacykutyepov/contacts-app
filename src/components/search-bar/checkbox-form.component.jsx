import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { isEmpty } from "../../utils/isObjEmpty";

const CheckboxForm = ({ visibilityFilter }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isEmpty(visibilityFilter)) {
      setChecked(false);
    }
  }, [visibilityFilter]);

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
