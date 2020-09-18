import React from "react";
import { connect } from "react-redux";
import PaginatedTable from "../contacts-table/paginated-table.component";
import TiledTable from "../contacts-table/tiled-table/tiled-table.component";

import { createStructuredSelector } from "reselect";
import { selectContacts } from "../../redux/contacts/contacts.selector";
import { selectView } from "../../redux/view/view.selector";

const ContactsPreview = ({ view, contacts }) => {
  if (!!contacts) {
    return (
      <div>
        {view === "tiled" ? (
          <TiledTable data={contacts} />
        ) : (
          <PaginatedTable data={contacts} />
        )}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = createStructuredSelector({
  contacts: selectContacts,
  view: selectView,
});

export default connect(mapStateToProps)(ContactsPreview);
