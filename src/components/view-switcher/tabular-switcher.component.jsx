import React from "react";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

import { useStyles } from "./view-switcher.styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const TabularSwitcher = ({ view, onSwitchView }) => {
  const toolTipClasses = useStyles();

  const CustomTooltip = (props) => {
    return <Tooltip arrow classes={toolTipClasses} {...props} />;
  };

  return (
    <CustomTooltip title="Tabular view" placement="top">
      <IconButton aria-label="Tabular view" onClick={onSwitchView}>
        <ViewComfyIcon
          fontSize="small"
          color={view === "tabular" ? "primary" : "action"}
        />
      </IconButton>
    </CustomTooltip>
  );
};

export default TabularSwitcher;
