import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { isEmpty } from "../../utils/isObjEmpty";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchInput = ({ dispatchFilterAction, visibilityFilter }) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (isEmpty(visibilityFilter)) {
      setSearchInput("");
    }
  }, [visibilityFilter]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    dispatchFilterAction({ fullName: e.target.value });
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search by full name"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={handleSearch}
        value={searchInput}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
