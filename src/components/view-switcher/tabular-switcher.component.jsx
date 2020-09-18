import React from "react";
import { useStyles } from "./view-switcher.styles";
import { IconButton, Tooltip } from "@material-ui/core";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

const TabularSwitcher = ({ view, onSwitchView }) => {
  const toolTipClasses = useStyles();

  const CustomTooltip = (props) => {
    return <Tooltip arrow classes={toolTipClasses} {...props} />;
  };

  return (
    <CustomTooltip title="Tabular view" placement="top">
      <IconButton aria-label="Tabular view" onClick={onSwitchView}>
        <ViewHeadlineIcon
          fontSize="small"
          color={view === "tabular" ? "primary" : "action"}
        />
      </IconButton>
    </CustomTooltip>
  );
};

export default TabularSwitcher;
