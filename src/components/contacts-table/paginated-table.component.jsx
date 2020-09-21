import React, { useState } from "react";
import { StyledTableCell, useStyles } from "./table.styles";
import { NATIONALITIES } from "../../constants/nationalities";
import { formatDOB } from "../../utils/convertDOB";
import { copyToClipboard } from "../../utils/copyToClipboard";
import { formatPhone } from "../../utils/formatPhone";

import NationPreview from "../nation-preview/nation-preview.component";
import CopyData from "../copy-data/copy-data.component";
import PaginationActions from "./pagination-action.component";

import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const PaginatedTable = ({ data }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => setCurrentPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const truncateEmail = (email) => email.slice(0, 17);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow tabIndex={-1}>
            <StyledTableCell align="left">Avatar</StyledTableCell>
            <StyledTableCell align="left">Full Name</StyledTableCell>
            <StyledTableCell align="left">Birthday</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
            <StyledTableCell align="right">Nationality</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(
                currentPage * rowsPerPage,
                currentPage * rowsPerPage + rowsPerPage
              )
            : data
          ).map((contact, index) => {
            const {
              name,
              dob,
              email,
              cell,
              location,
              nat,
              picture,
              fullName,
              locationData,
            } = contact;

            return (
              <TableRow key={index} tabIndex={-1}>
                <TableCell align="left">
                  <Avatar alt="Avatar" src={picture.thumbnail} />
                </TableCell>
                <TableCell align="left">{`${name.title} ${fullName}`}</TableCell>
                <TableCell align="left">
                  {`${formatDOB(dob)}, ${dob.age} years`}
                </TableCell>
                <TableCell align="left">
                  <CopyData onCopy={() => copyToClipboard(email)}>
                    <a href={`mailto:${email}`}>
                      {`${truncateEmail(email)} ...`}
                    </a>
                  </CopyData>
                </TableCell>
                <TableCell align="left">
                  <CopyData onCopy={() => copyToClipboard(cell)}>
                    <a href={`tel:${formatPhone(cell)}`}>{cell}</a>
                  </CopyData>
                </TableCell>
                <TableCell align="left">
                  <CopyData
                    onCopy={() =>
                      copyToClipboard(location.country + locationData)
                    }
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
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50, 100]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage={"People/ page"}
              page={currentPage}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={PaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default PaginatedTable;
