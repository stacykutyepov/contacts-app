import React from "react";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { useStyles } from "./view-switcher.styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const UpdateSwitcher = ({ view }) => {
  const toolTipClasses = useStyles();

  const CustomTooltip = (props) => {
    return <Tooltip arrow classes={toolTipClasses} {...props} />;
  };

  return (
    <CustomTooltip title="Update data" placement="top">
      <IconButton aria-label="Update data" onClick={() => console.log("hi")}>
        <RotateLeftIcon
          fontSize="small"
          color={view === "update" ? "primary" : "action"}
        />
      </IconButton>
    </CustomTooltip>
  );
};

export default UpdateSwitcher;
