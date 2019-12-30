import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getStations,
  createStation,
  updateStation,
  deleteStation
} from "../../actions/stations";
import Authenticate from "../../HOC/Authenticate";

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

import FormDialog from "./Modal";

class Station extends Component {
  componentDidMount() {
    this.props.getStations();
  }

  render() {
    const { station } = this.props;
    return (
      <div>
        <h1>QUẢN LÝ STATIONS</h1>
        <FormDialog />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Số thứ tự</TableCell>
                <TableCell align="right">Tên bến xe</TableCell>
                <TableCell align="right">Địa chỉ</TableCell>
                <TableCell align="right">Tỉnh thành</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {station.map((station, index) => (
                <TableRow key={station._id}>
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{station.name}</TableCell>
                  <TableCell align="right">{station.address}</TableCell>
                  <TableCell align="right">{station.province}</TableCell>
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
    station: state.station
  };
};

export default connect(mapStateToProps, {
  getStations,
  createStation,
  updateStation,
  deleteStation
})(Authenticate(Station));
