import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CardPreview from "../../components/card-preview/card-preview.component";
import { useStyles } from "./contact-view.styles";

const ContactView = ({ match, data, contacts }) => {
  const classes = useStyles();

  const id = parseInt(match.params.contactId);
  const contactSelected = contacts.filter(
    (contact) => contact.contactId === id
  );
  console.log(contactSelected);
  return (
    <div className={classes.container}>
      <h2>Contact View</h2>
      <CardPreview contact={contactSelected[0]} />

      <Link to={"/contacts"}>
        <Button variant="outlined">Back</Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});
export default connect(mapStateToProps)(ContactView);
