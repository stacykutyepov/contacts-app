import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchContactsStart } from "../../redux/contacts/contacts.actions";
import ContactsPreview from "../../components/contacts-preview/contacts-preview.component";
import { pagesStyles } from "../pages.styles";
import Statistics from "../../components/statistics/statistics-container.component";
import ViewSwitcher from "../../components/view-switcher/view-switcher.component";
import SearchBar from "../../components/search-bar/search-bar.container";

const ContactsPage = ({ fetchContactsStart }) => {
  const classes = pagesStyles();

  useEffect(() => {
    fetchContactsStart();
  }, []);

  return (
    <div className={classes.container}>
      <section className={classes.contacts}>
        <h1>Contacts</h1>
        <ViewSwitcher />
      </section>
      <SearchBar />
      <ContactsPreview />
      <Statistics />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContactsStart: () => dispatch(fetchContactsStart()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
