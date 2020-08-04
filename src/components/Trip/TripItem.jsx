import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import moment from "moment";
import { connect } from "react-redux";
import * as tripActions from "../../redux/actions/trips";

class TripItem extends Component {
  handleClick(trip) {
    console.log("heheheh", trip);
  }

  render() {
    const { trip, index } = this.props;
    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row" align="center">
          {index + 1}
        </TableCell>
        <TableCell align="center">{trip.fromStation.name}</TableCell>
        <TableCell align="center">{trip.toStation.name}</TableCell>
        <TableCell align="center">
          {moment(trip.startTime).format("DD/MM/YYYY, HH:mm:ss")}
        </TableCell>
        <TableCell align="center">{new Intl.NumberFormat("vi-VN").format(trip.price)} đ</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            style={{ marginRight: "10px" }}
            onClick={() => {
              this.props.deleteTrip(trip._id);
            }}
          >
            Xóa
          </Button>

          <Button
            variant="contained"
            color="primary"
            endIcon={<UpdateIcon />}
            onClick={() => this.handleClick(trip)}
          >
            Cập nhật
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default connect(null, tripActions)(TripItem);
