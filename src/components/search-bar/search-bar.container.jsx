import React from "react";
import Filter from "./filter.component";
import { GENDER } from "../../constants/gender";
import { NATIONALITIES } from "../../constants/nationalities";
import SearchInput from "./search-input.component";
import CeckboxForm from "./checkbox-form.component";
import { useStyles } from "./search-bar.styles";
import ClearButton from "./clear-button.component";
import Grid from "@material-ui/core/Grid";

const SearchBar = () => {
  const classes = useStyles();
  return (
    <section className={classes.searchContainer}>
      <Grid container spacing={1} alignItems="center" alignContent="flex-start">
        <Grid item xs={12} sm={12} md={5}>
          <SearchInput />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Filter
            filterData={GENDER}
            inputId="gender"
            labelId="gender-filter"
            inputLabel="Gender"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Filter
            filterData={NATIONALITIES}
            inputId="nationalities"
            labelId="nationalities-filter"
            inputLabel="Nationality"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CeckboxForm />
        </Grid>
        <Grid item xs={12} sm={6} md={1}>
          <ClearButton />
        </Grid>
      </Grid>
    </section>
  );
};

export default SearchBar;
