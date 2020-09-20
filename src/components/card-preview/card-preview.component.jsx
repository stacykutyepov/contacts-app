import React from "react";
import { Link } from "react-router-dom";
import CopyData from "../copy-data/copy-data.component";
import NationPreview from "../nation-preview/nation-preview.component";
import { NATIONALITIES } from "../../constants/nationalities";
import { formatPhone } from "../../utils/formatPhone";
import { makeStyles } from "@material-ui/core/styles";

import { copyToClipboard } from "../../utils/copyToClipboard";
import {
  Card,
  CardMedia,
  Typography,
  Divider,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: "90vw",
  },
  paginationCount: {
    padding: 0,
  },
  card: {
    margin: "10px",
    textAlign: "left",
    minHeight: "440px",
  },
  media: {
    height: "180px",
  },
  cardContent: {
    height: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  natContainer: {
    marginTop: "20px",
  },
});

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
        <Typography gutterBottom variant="subtitle1" color="primary">
          {`${name.title} ${fullName} (${dob.age} years)`}
        </Typography>
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

export default CardPreview;
