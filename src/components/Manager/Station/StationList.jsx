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
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       stationList: []
  //     };
  //   }

  componentDidMount() {
    this.props.getStations();
  }

  //   getStations = async () => {
  //     const stationList = await this.props.getStations();
  //     this.setState({ stationList });
  //   };

  //   listenDeleteProduct = () => {
  //     this.getStations();
  //   };

  renderStation = () => {
    const { stations } = this.props;
    return stations.map((row, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row" align="center">
            {index + 1}
          </TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.address}</TableCell>
          <TableCell align="right">{row.province}</TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              style={{ marginRight: "10px" }}
              onClick={async () => {
                await this.props.deleteStation(row._id);
                // await this.props.getStations();
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
                  `/manager/stations/${row._id}/update-station`
                )
              }
            >
              Update
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };

  render() {
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
            <TableBody>{this.renderStation()}</TableBody>
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
