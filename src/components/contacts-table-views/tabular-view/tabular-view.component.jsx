import React, { useState } from "react";
import { StyledTableCell, useStyles } from "../table.styles";
import { tableHeadInfo } from "../../../constants/tableHeadInfo";
import RowPreview from "../../row-preview/row-preview.component";
import PaginationActions from "../pagination-action.component";

import {
  Table,
  TableBody,
  TableHead,
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

  const handleChangePage = (event, newPage) => setCurrentPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow tabIndex={-1}>
            {tableHeadInfo.map((item) => (
              <StyledTableCell key={item.name} align={item.align}>
                {item.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(
                currentPage * rowsPerPage,
                currentPage * rowsPerPage + rowsPerPage
              )
            : data
          ).map((contact) => {
            return <RowPreview key={contact.contactId} contact={contact} />;
          })}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              classes={{
                toolbar: classes.tablePagination,
                caption: classes.caption,
              }}
              rowsPerPageOptions={[10, 20, 50, 100]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage={"People per Page"}
              page={currentPage}
              SelectProps={{
                inputProps: { "aria-label": "Rows" },
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
