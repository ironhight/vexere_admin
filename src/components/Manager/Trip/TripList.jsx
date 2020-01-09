import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrips, createTrip } from "../../../actions/trips";
import Authenticate from "../../../HOC/Authenticate";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

import CreateTrip from "./CreateTrip";

class Trip extends Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    const { trips } = this.props;
    return (
      <div>
        <h1>Quản lý Trip</h1>
        <CreateTrip />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Số thứ tự</TableCell>
                <TableCell align="right">Nơi đi</TableCell>
                <TableCell align="right">Nơi đến</TableCell>
                <TableCell align="right">Giờ xuất phát</TableCell>
                <TableCell align="right">Giá tiền</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trips.map((trip, index) => (
                <TableRow key={trip._id}>
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{trip.fromStation.name}</TableCell>
                  <TableCell align="right">{trip.toStation.name}</TableCell>
                  <TableCell align="right">{trip.startTime}</TableCell>
                  <TableCell align="right">{trip.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      style={{ marginRight: "10px" }}
                    >
                      Delete
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<UpdateIcon />}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips
  };
};

export default connect(mapStateToProps, { getTrips, createTrip })(
  Authenticate(Trip)
);
