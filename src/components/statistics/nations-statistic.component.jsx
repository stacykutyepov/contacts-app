import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    flexGrow: 1,
    textAlign: "left",
  },
  span: {
    color: theme.palette.text.secondary,
  },
}));

const NationsStatistic = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <p className={classes.nat}>Nationalities</p>
      <Grid container spacing={3}>
        {Object.entries(data.nat).map(([key, value]) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4} lg={2}>
              <span className={classes.span}>
                <strong>{`${key}: `}</strong>
                {`${value} contacts`}
              </span>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};

export default NationsStatistic;
