import React from "react";
import { useStyles } from "./nation-preview.styles";

const NationPreview = ({ children, ...props }) => {
  const { style } = useStyles(props);
  return <span className={style}>{children}</span>;
};

export default NationPreview;
