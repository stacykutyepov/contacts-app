import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { firstCharToUpperCase } from "../../utils/firstCharToUpperCase";
import { isEmpty } from "../../utils/isObjEmpty";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

const Filter = ({
  inputId,
  labelId,
  filterData,
  inputLabel,
  dispatchFilterAction,
  visibilityFilter,
}) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (isEmpty(visibilityFilter)) {
      setFilter("");
    }
  }, [visibilityFilter]);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    dispatchFilterAction({ [inputId]: value });
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={inputId}>{inputLabel}</InputLabel>
      <Select
        labelId={labelId}
        id={labelId}
        value={filter}
        onChange={handleChange}
        label={inputLabel}
      >
        {Object.entries(filterData).map(([key, value]) => {
          return (
            <MenuItem key={key} value={key}>
              {value.name
                ? firstCharToUpperCase(value.name)
                : firstCharToUpperCase(key)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Filter;
