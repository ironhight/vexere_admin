import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tripActions from '../redux/actions/trips';
import * as stationActions from '../redux/actions/stations';
import Authenticate from '../HOC/Authenticate';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import AddBoxIcon from '@material-ui/icons/AddBox';

import _ from 'lodash';

class TripsPage extends Component {
  componentDidMount() {
    if (_.isEmpty(this.props.trips)) {
      this.props.getTrips();
    }
  }

  renderTrips = () => {
    return this.props.trips.map((row, index) => {
      // lodash binh thuong
      const res = _.get(
        _.find(_.get(this.props, 'stations', []), { _id: row.fromStation }),
        'name'
      );

      // pipe line
      const res2 = _.chain(this.props)
        .get('stations', []) // _.get(this.props, "stations", [])
        .find({ _id: row.fromStation })
        .get('name')
        .value();

      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="right">{row.fromStation.name}</TableCell>
          <TableCell align="right">{row.toStation.name}</TableCell>
          <TableCell align="right">{row.startTime}</TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              style={{ marginRight: '10px' }}
              onClick={async () => {
                await this.props.deleteTrip(row._id);
              }}
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
      );
    });
  };

  render() {
    return (
      <div>
        <h1>QUẢN LÝ TRIPS</h1>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AddBoxIcon />}
          onClick={() => this.props.history.push('/manager/trips/create-trip')}
        >
          Thêm Trips
        </Button>

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
            <TableBody>{this.renderTrips()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
  };
};

export default connect(mapStateToProps, { ...tripActions, ...stationActions })(
  Authenticate(TripsPage)
);
