import React, { useState } from "react";
import { useStyles } from "../table.styles";
import PaginationActions from "../pagination-action.component";
import CardPreview from "../../card-preview/card-preview.component";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  Grid,
} from "@material-ui/core";

const TiledView = ({ data }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => setCurrentPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          <TableRow>
            <TableCell>
              <Grid container spaicing={3}>
                {(rowsPerPage > 0
                  ? data.slice(
                      currentPage * rowsPerPage,
                      currentPage * rowsPerPage + rowsPerPage
                    )
                  : data
                ).map((contact, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={2}>
                      <CardPreview contact={contact} />
                    </Grid>
                  );
                })}
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              classes={{ toolbar: classes.tablePagination }}
              rowsPerPageOptions={[6, 12, 36, 48]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage={"People/ page"}
              page={currentPage}
              SelectProps={{
                inputProps: { "aria-label": "Cards" },
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

export default TiledView;
