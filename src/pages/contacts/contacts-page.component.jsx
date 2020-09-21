import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchContactsStart } from "../../redux/contacts/contacts.actions";
import { createStructuredSelector } from "reselect";
import { selectContactsLength } from "../../redux/contacts/contacts.selector";

import ContactsPreview from "../../components/contacts-preview/contacts-preview.component";
import { pagesStyles } from "../pages.styles";
import Statistics from "../../components/statistics/statistics-container.component";
import ViewSwitcher from "../../components/view-switcher/view-switcher.component";
import SearchBar from "../../components/search-bar/search-bar.container";

const ContactsPage = ({ fetchContactsStart, contactsLength }) => {
  const classes = pagesStyles();

  useEffect(() => {
    if (!contactsLength) {
      fetchContactsStart();
    }
  });

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

const mapStateToProps = createStructuredSelector({
  contactsLength: selectContactsLength,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContactsStart: () => dispatch(fetchContactsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
