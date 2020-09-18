import React, { useState } from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { firstCharToUpperCase } from "../../utils/firstCharToUpperCase";

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
}) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  // const [isOpen, setOpen] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    dispatchFilterAction(value);
  };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={inputId}>{inputLabel}</InputLabel>
      <Select
        labelId={labelId}
        id={labelId}
        // open={isOpen}
        // onClose={handleClose}
        // onOpen={handleOpen}
        value={filter}
        onChange={handleChange}
        label={inputLabel}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
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
