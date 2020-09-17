import React from "react";

import { useStyles } from "./statistics.styles";

const GenderStatistics = ({ contacts }) => {
  const classes = useStyles();

  const calcPredominate = (data) => {
    if (data.gender.male > data.gender.female) {
      return "Male predominate";
    } else {
      return "Female predominate";
    }
  };
  return (
    <>
      <div className={classes.containerRow}>
        <div className={classes.statisticData}>
          <p>Collection size</p>
          <span className={classes.number}>{contacts.size}</span>
        </div>
        {Object.entries(contacts.gender).map(([key, value]) => {
          return (
            <div className={classes.statisticData} key={key}>
              <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <span className={classes.number}>{value}</span>
            </div>
          );
        })}
      </div>
      <p className={classes.predominate}>{calcPredominate(contacts)}</p>
    </>
  );
};

export default GenderStatistics;
