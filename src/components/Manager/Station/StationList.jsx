import React, { Component } from "react";
import { connect } from "react-redux";
import * as stationActions from "../../../actions/stations";
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
import CreateStation from "./CreateStation";

class StationList extends Component {
  componentDidMount() {
    this.props.getStations();
  }

  render() {
    const { stations } = this.props;
    return (
      <div>
        <h1>QUẢN LÝ STATIONS</h1>
        <CreateStation />
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
              {stations.map((station, index) => (
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
                      onClick={() => {
                        this.props.deleteStation(station._id);
                        console.log(
                          "TCL: StationList -> render -> station._id",
                          station._id
                        );
                      }}
                    >
                      Delete
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<UpdateIcon />}
                      onClick={() =>
                        this.props.history.push(
                          `/manager/stations/${station._id}/update-station`
                        )
                      }
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
    stations: state.stations
  };
};

export default connect(
  mapStateToProps,
  stationActions
)(Authenticate(StationList));
