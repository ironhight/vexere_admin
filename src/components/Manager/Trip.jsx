import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrips, createTrip } from "../../actions/trips";
import Authenticate from "../../HOC/Authenticate";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Trip extends Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    const { trip } = this.props;
    return (
      <div>
        <h1>Quản lý Trip</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Số thứ tự</TableCell>
                <TableCell align="right">Nơi đi</TableCell>
                <TableCell align="right">Nơi đến</TableCell>
                <TableCell align="right">Giờ xuất phát</TableCell>
                <TableCell align="right">Giá tiền</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trip.map((trip, index) => (
                // console.log(
                //   "TCL: Trip -> render -> trip",
                //   trip.fromStation.name
                // )

                <TableRow key={trip._id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{trip.fromStation}</TableCell>
                  <TableCell align="right">{trip.toStation}</TableCell>
                  <TableCell align="right">{trip.startTime}</TableCell>
                  <TableCell align="right">{trip.price}</TableCell>
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
    trip: state.trip
  };
};

export default connect(mapStateToProps, { getTrips, createTrip })(
  Authenticate(Trip)
);
