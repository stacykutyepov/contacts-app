import PropTypes from "prop-types";
import React from "react";
import CopyData from "../copy-data/copy-data.component";
import NationPreview from "../nation-preview/nation-preview.component";
import { Link } from "react-router-dom";
import { NATIONALITIES } from "../../constants/nationalities";
import { formatDOB } from "../../utils/convertDOB";
import { copyToClipboard } from "../../utils/copyToClipboard";
import { formatPhone } from "../../utils/formatPhone";

import { TableCell, TableRow, Avatar } from "@material-ui/core";

const RowPreview = ({ contact }) => {
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

  const truncateEmail = (email) => email.slice(0, 17);

  return (
    <TableRow tabIndex={-1}>
      <TableCell align="left">
        <Link to={`/contacts/${contactId}`}>
          <Avatar alt="Avatar" src={picture.thumbnail} />
        </Link>
      </TableCell>
      <TableCell align="left">
        <Link to={`/contacts/${contactId}`}>{`${name.title} ${fullName}`}</Link>
      </TableCell>

      <TableCell align="left">
        {`${formatDOB(dob)}, ${dob.age} years`}
      </TableCell>
      <TableCell align="left">
        <CopyData onCopy={() => copyToClipboard(email)}>
          <a href={`mailto:${email}`}>{`${truncateEmail(email)} ...`}</a>
        </CopyData>
      </TableCell>
      <TableCell align="left">
        <CopyData onCopy={() => copyToClipboard(cell)}>
          <a href={`tel:${formatPhone(cell)}`}>{cell}</a>
        </CopyData>
      </TableCell>
      <TableCell align="left">
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
      </TableCell>
      <TableCell align="right">
        <NationPreview backgroundColor={NATIONALITIES[nat].color}>
          {NATIONALITIES[nat].name}
        </NationPreview>
      </TableCell>
    </TableRow>
  );
};

RowPreview.propTypes = {
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

export default RowPreview;
