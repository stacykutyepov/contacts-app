import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./statistics.styles";

import { createStructuredSelector } from "reselect";
import { selectStatistics } from "../../redux/contacts/contacts.selector";

import NationStatistic from "./nations-statistic.component";
import GenderStatistic from "./gender.statistic.component";

const Statistics = ({ contacts }) => {
  const classes = useStyles();
  console.log(contacts);

  return (
    <section className={classes.container}>
      <h4>Statistic</h4>
      <GenderStatistic contacts={contacts} />
      <NationStatistic data={contacts} />
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  contacts: selectStatistics,
});

export default connect(mapStateToProps)(Statistics);
