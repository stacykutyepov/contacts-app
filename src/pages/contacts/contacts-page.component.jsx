import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchContactsStart } from "../../redux/contacts/contacts.actions";
import ContactsPreview from "../../components/contacts-preview/contacts-preview.component";

const ContactsPage = ({ fetchContactsStart }) => {
  useEffect(() => {
    fetchContactsStart();
  }, []);

  return (
    <div>
      <h2>Contact Page</h2>
      <ContactsPreview />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContactsStart: () => dispatch(fetchContactsStart()),
});

export default connect(null, mapDispatchToProps)(ContactsPage);
