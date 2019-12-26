import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import DvrIcon from "@material-ui/icons/Dvr";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
// class Manager extends Component {
//   render() {
//     return (
//       <div className="manager">
//         <Link to="/manager/stations" className="manager__menu">
//           Quản lý Station
//         </Link>
//         <Link to="/manager/trip" className="manager__menu">
//           Quản lý Trip
//         </Link>
//         <Link to="/manager/user" className="manager__menu">
//           Quản lý User
//         </Link>
//         <Link to="/manager/ticket" className="manager__menu">
//           Quản lý Ticket
//         </Link>
//       </div>
//     );
//   }
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   }
// }));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

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

export default Manager;
