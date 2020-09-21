import PropTypes from "prop-types";
import React from "react";
import { useStyles } from "./card-preview.styles";
import { Link } from "react-router-dom";
import CopyData from "../copy-data/copy-data.component";
import NationPreview from "../nation-preview/nation-preview.component";
import { NATIONALITIES } from "../../constants/nationalities";
import { formatPhone } from "../../utils/formatPhone";
import { copyToClipboard } from "../../utils/copyToClipboard";

import {
  Card,
  CardMedia,
  Typography,
  Divider,
  CardContent,
} from "@material-ui/core";

const CardPreview = ({ contact }) => {
  const classes = useStyles();
  const {
    name,
    dob,
    email,
    cell,
    location,
    nat,
    picture,
    locationData,
    fullName,
    contactId,
  } = contact;

  return (
    <Card className={classes.card}>
      <Link to={`/contacts/${contactId}`}>
        <CardMedia
          className={classes.media}
          image={picture.large}
          title="avatar"
        />
      </Link>

      <CardContent className={classes.cardContent}>
        <Link to={`/contacts/${contactId}`}>
          <Typography gutterBottom variant="subtitle1" color="primary">
            {`${name.title} ${fullName} (${dob.age} years)`}
          </Typography>
        </Link>
        <Divider variant="middle" />

        <CopyData onCopy={() => copyToClipboard(email)}>
          <a href={`mailto:${email}`}>{email}</a>
        </CopyData>
        <CopyData onCopy={() => copyToClipboard(cell)}>
          <a href={`tel:${formatPhone(cell)}`}>{cell}</a>
        </CopyData>
        <CopyData
          onCopy={() => copyToClipboard(location.country + locationData)}
        >
          <div>
            <span>
              <strong>/{location.country}/</strong>
            </span>
            <div>
              <span>{locationData}</span>
            </div>
          </div>
        </CopyData>
        <Divider variant="middle" />
        <div className={classes.natContainer}>
          <NationPreview backgroundColor={NATIONALITIES[nat].color}>
            {NATIONALITIES[nat].name}
          </NationPreview>
        </div>
      </CardContent>
    </Card>
  );
};

CardPreview.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    dob: PropTypes.shape({
      age: PropTypes.number.isRequired,
    }),
    cell: PropTypes.string.isRequired,
    location: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }),
    nat: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }),
    locationData: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    contactId: PropTypes.number.isRequired,
  }),
};

export default CardPreview;
