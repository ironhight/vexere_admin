import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { withRouter } from "react-router-dom";

import * as stationActions from "../../redux/actions/stations";
import { connect } from "react-redux";
import UpdateStation from "../../pages/UpdateStation";

class StationItem extends Component {
  render() {
    const { station, index } = this.props;
    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row" align="center">
          {index + 1}
        </TableCell>
        <TableCell align="center">{station.name}</TableCell>
        <TableCell align="center">{station.address}</TableCell>
        <TableCell align="center">{station.province}</TableCell>
        <TableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            style={{ marginRight: "10px" }}
            onClick={() => {
              this.props.deleteStation(station._id);
            }}
          >
            Xóa
          </Button>

          <UpdateStation station={station} />
        </TableCell>
      </TableRow>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stations: state.stations,
  };
};

export default withRouter(connect(mapStateToProps, stationActions)(StationItem));
