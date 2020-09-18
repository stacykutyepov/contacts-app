import React from "react";
import { useStyles } from "./view-switcher.styles";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import { Tooltip, IconButton } from "@material-ui/core";

const TiledSwitcher = ({ view, onSwitchView }) => {
  const toolTipClasses = useStyles();

  const CustomTooltip = (props) => {
    return <Tooltip arrow classes={toolTipClasses} {...props} />;
  };

  return (
    <CustomTooltip title="Tiled view" placement="top">
      <IconButton aria-label="Tiled view" onClick={onSwitchView}>
        <ViewComfyIcon
          fontSize="small"
          color={view === "tiled" ? "primary" : "action"}
        />
      </IconButton>
    </CustomTooltip>
  );
};

export default TiledSwitcher;
