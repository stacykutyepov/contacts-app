import React from "react";
import { useStyles, styles } from "./copy-data.styles";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const CopyData = ({ children, onCopy }) => {
  const toolTipClasses = useStyles();
  const classes = styles();

  const CustomTooltip = (props) => {
    return <Tooltip arrow classes={toolTipClasses} {...props} />;
  };

  return (
    <div className={classes.container}>
      <CustomTooltip title="Copy" placement="top">
        <IconButton aria-label="Copy" onClick={onCopy}>
          <FileCopyIcon fontSize="small" color="primary" />
        </IconButton>
      </CustomTooltip>
      {children}
    </div>
  );
};

export default CopyData;
