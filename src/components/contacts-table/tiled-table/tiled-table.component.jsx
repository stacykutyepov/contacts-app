import React, { useState } from "react";
import { useStyles } from "../table.styles";
import Grid from "@material-ui/core/Grid";
import CopyData from "../../copy-data/copy-data.component";
import NationPreview from "../../nation-preview/nation-preview.component";
import { NATIONALITIES } from "../../../constants/nationalities";

import PaginationActions from "../pagination-action.component";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const TiledTable = ({ data }) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => setCurrentPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const phoneInt = (phone) => phone.split(/\D/).join("");
  const copyToClipboard = (data) => navigator.clipboard.writeText(data);

  //   Formating date of birth to mm-dd-yyyy
  const convertDOB = (dob) =>
    dob.date.slice(5, 10).split("-").join("/") + "/" + dob.date.slice(0, 4);

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
                  const {
                    name,
                    dob,
                    email,
                    cell,
                    location,
                    nat,
                    picture,
                  } = contact;
                  const locationData = `${location.street.number}, ${location.street.name},
            ${location.city}, ${location.state}, ${location.postcode}`;

                  return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={2}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.media}
                          image={picture.large}
                          title="avatar"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            color="primary"
                          >
                            {`${name.title} ${name.first} ${name.last} (${dob.age} years)`}
                          </Typography>
                          <Divider variant="middle" />

                          <CopyData onCopy={() => copyToClipboard(email)}>
                            <a href={`mailto:${email}`}>{email}</a>
                          </CopyData>
                          <CopyData onCopy={() => copyToClipboard(cell)}>
                            <a href={`tel:${phoneInt(cell)}`}>{cell}</a>
                          </CopyData>
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
                          <Divider variant="middle" />
                          <div className={classes.natContainer}>
                            <NationPreview
                              backgroundColor={NATIONALITIES[nat].color}
                            >
                              {NATIONALITIES[nat].name}
                            </NationPreview>
                          </div>
                        </CardContent>
                      </Card>
                    </Grid>

                    //
                    //     </TableCell>
                    //     <TableCell align="right">
                    //       <NationPreview backgroundColor={NATIONALITIES[nat].color}>
                    //         {NATIONALITIES[nat].name}
                    //       </NationPreview>
                    //     </TableCell>
                    //   </TableRow>
                  );
                })}
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[6, 12, 36, 48]}
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

export default TiledTable;
