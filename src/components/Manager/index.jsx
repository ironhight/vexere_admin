import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import DvrIcon from "@material-ui/icons/Dvr";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Authenticate from "../../HOC/Authenticate";
// import { withRouter } from "react-router-dom";

function Manager(props) {
  return (
    <React.Fragment>
      <ListItem button onClick={() => props.history.push("/manager/stations")}>
        <ListItemIcon>
          <BrandingWatermarkIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý Station" />
      </ListItem>
      <ListItem button onClick={() => props.history.push("manager/trips")}>
        <ListItemIcon>
          <DirectionsCarIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý Trip" />
      </ListItem>
      <ListItem button onClick={() => props.history.push("manager/tickets")}>
        <ListItemIcon>
          <DvrIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý Tickets" />
      </ListItem>
      <ListItem button onClick={() => props.history.push("manager/users")}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý Users" />
      </ListItem>
    </React.Fragment>
  );
}

export default Authenticate(Manager);
