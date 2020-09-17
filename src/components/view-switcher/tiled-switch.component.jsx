import React from "react";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";

import { useStyles } from "./view-switcher.styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

const TiledSwitcher = ({ view, onSwitchView }) => {
  const toolTipClasses = useStyles();

  const CustomTooltip = (props) => {
    return <Tooltip arrow classes={toolTipClasses} {...props} />;
  };

  return (
    <CustomTooltip title="Tiled view" placement="top">
      <IconButton aria-label="Tiled view" onClick={onSwitchView}>
        <ViewHeadlineIcon
          fontSize="small"
          color={view === "tiled" ? "primary" : "action"}
        />
      </IconButton>
    </CustomTooltip>
  );
};

export default TiledSwitcher;
