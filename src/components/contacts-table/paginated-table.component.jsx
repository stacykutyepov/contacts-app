import PropTypes from "prop-types";
import React, { useState } from "react";
import { NATIONALITIES } from "../../constants/nationalities";
import NationPreview from "../nation-preview/nation-preview.component";
import CopyData from "../copy-data/copy-data.component";

import PaginationActions from "./pagination-action.component";
import { StyledTableCell, useStyles } from "./table.styles";
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

const PaginatedTable = ({ data }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

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
          ).map((contact, index) => (
            <TableRow key={index} tabIndex={-1}>
              <TableCell align="left">'Avatar'</TableCell>
              <TableCell align="left">{`${contact.name.title} ${contact.name.first} ${contact.name.last}`}</TableCell>
              <TableCell align="left">{`${contact.dob.date} ${contact.dob.age}`}</TableCell>
              <TableCell align="left">
                <CopyData email={contact.email} />
              </TableCell>
              <TableCell align="left">
                <CopyData phone={contact.cell} />
              </TableCell>
              <TableCell align="left">{contact.location.city}</TableCell>
              <TableCell align="right">
                <NationPreview
                  backgroundColor={NATIONALITIES[contact.nat].color}
                >
                  {NATIONALITIES[contact.nat].name}
                </NationPreview>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50, 100]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
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

PaginatedTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default PaginatedTable;
