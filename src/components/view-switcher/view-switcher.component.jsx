import React from "react";
import { connect } from "react-redux";
import { switchView } from "../../redux/view/view.actions";
import UpdateSwitcher from "./update-switch.component";
import TabularSwitcher from "./tabular-switcher.component";
import TiledSwitcher from "./tiled-switch.component";

const ViewSwitcher = ({ view, switchView }) => {
  return (
    <div>
      <UpdateSwitcher view={view.view} />
      <TabularSwitcher
        view={view.view}
        onSwitchView={() => switchView("tabular")}
      />
      <TiledSwitcher
        view={view.view}
        onSwitchView={() => switchView("tiled")}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  view: state.view,
});

const mapDispatchToProps = (dispatch) => ({
  switchView: (view) => dispatch(switchView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitcher);
