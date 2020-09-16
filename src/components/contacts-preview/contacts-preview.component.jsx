import { Divider } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PaginatedTable from "../contacts-table/paginated-table.component";

const ContactsPreview = ({ contacts }) => {
  return (
    <div>
      <PaginatedTable data={contacts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const allContacts = state.contacts.contacts.results;
  return {
    contacts: allContacts,
  };
};

export default connect(mapStateToProps)(ContactsPreview);
