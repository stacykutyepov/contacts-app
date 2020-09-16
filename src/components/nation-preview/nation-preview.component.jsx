import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  style: {
    backgroundColor: (props) => props.backgroundColor,
    color: "white",
    padding: "6px",
  },
  secondStyle: {
    color: (props) => props.color,
  },
});

const NationPreview = ({ children, ...props }) => {
  const { style } = useStyles(props);
  return <span className={style}>{children}</span>;
};

export default NationPreview;
