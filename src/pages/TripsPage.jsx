import React, { Component } from "react";
import { connect } from "react-redux";
import * as tripActions from "../redux/actions/trips";
import Authenticate from "../HOC/Authenticate";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "../components/Pagination";
import TripItem from "../components/Trip/TripItem";
import CreateTrip from "./CreateTrip";

class TripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      totalPages: "",
      pageLimit: "",
      currentPage: "",
      startIndex: "",
      endIndex: "",
    };
  }

  componentDidMount() {
    this.props.getTrips();
    this.setState({ totalRecords: this.props.trips.length });
  }

  showTrips = (trips) => {
    let result = null;
    result = trips.map((trip, index) => {
      return <TripItem key={index} trip={trip} index={index} />;
    });

    return result;
  };

  onChangePage = (data) => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex,
    });
  };

  render() {
    let { trips } = this.props;
    let { totalPages, currentPage, pageLimit, startIndex, endIndex } = this.state;
    let rowsPerPage = [];
    if (trips.length > 0) {
      rowsPerPage = trips.slice(startIndex, endIndex + 1);
    }
    return (
      <div className="section product_list_mng">
        <div className="container-fluid">
          <div className="box_product_control mb-15">
            <h1>Quản lý chuyến xe</h1>
            <CreateTrip />
            <div className="row">
              <div className="col-xs-12 box_change_pagelimit mt-15">
                Hiển thị
                <select
                  className="form-control"
                  value={pageLimit}
                  onChange={(e) => this.setState({ pageLimit: parseInt(e.target.value) })}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                chuyến xe
              </div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Số thứ tự</TableCell>
                  <TableCell align="center">Nơi đi</TableCell>
                  <TableCell align="center">Nơi đến</TableCell>
                  <TableCell align="center">Ngày, giờ xuất phát</TableCell>
                  <TableCell align="center">Giá tiền</TableCell>
                  <TableCell align="center">Tùy chọn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.showTrips(rowsPerPage)}</TableBody>
            </Table>
          </TableContainer>

          <div className="box_pagination">
            <div className="row">
              <div className="col-xs-12 box_pagination_info text-right">
                <p>
                  {trips.length} Chuyến xe | Trang {currentPage}/{totalPages}
                </p>
              </div>
              <div className="col-xs-12 text-center ml-30">
                <Pagination
                  totalRecords={trips.length}
                  pageLimit={pageLimit || 5}
                  initialPage={1}
                  pagesToShow={5}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    getTrips: () => dispatch(tripActions.getTrips()),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Authenticate(TripsPage));
