import React from "react";
import { connect } from "react-redux";
import {
  addFilter,
  deleteAllFilters,
} from "../../redux/contacts/contacts.actions";
import Filter from "./filter.component";
import { GENDER } from "../../constants/gender";
import { NATIONALITIES } from "../../constants/nationalities";
import SearchInput from "./search-input.component";
import CeckboxForm from "./checkbox-form.component";
import { useStyles } from "./search-bar.styles";
import ClearButton from "./clear-button.component";
import Grid from "@material-ui/core/Grid";

const SearchBar = ({ visibilityFilter, addFilter, deleteAllFilters }) => {
  const classes = useStyles();
  return (
    <section className={classes.searchContainer}>
      <Grid container spacing={1} alignItems="center" alignContent="flex-start">
        <Grid item xs={12} sm={12} md={5}>
          <SearchInput
            dispatchFilterAction={addFilter}
            visibilityFilter={visibilityFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Filter
            filterData={GENDER}
            inputId="gender"
            labelId="gender-filter"
            inputLabel="Gender"
            dispatchFilterAction={addFilter}
            visibilityFilter={visibilityFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Filter
            filterData={NATIONALITIES}
            inputId="nat"
            labelId="nationalities-filter"
            inputLabel="Nationality"
            dispatchFilterAction={addFilter}
            visibilityFilter={visibilityFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <CeckboxForm visibilityFilter={visibilityFilter} />
        </Grid>
        <Grid item xs={12} sm={6} md={1}>
          <ClearButton onClearAll={deleteAllFilters} />
        </Grid>
      </Grid>
    </section>
  );
};

const mapStateToProps = (state) => ({
  visibilityFilter: state.contacts.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  addFilter: (filter) => dispatch(addFilter(filter)),
  deleteAllFilters: () => dispatch(deleteAllFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
