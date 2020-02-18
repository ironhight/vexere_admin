import React, { Component } from "react";
import StationItem from "../components/Station/StationItem";
import Pagination from "../components/Pagination";
import * as stationActions from "../redux/actions/stations";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CreateStation from "../components/Station/CreateStation";
import "./styles.css";

class PaginationStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      totalPages: "",
      pageLimit: "",
      currentPage: "",
      startIndex: "",
      endIndex: ""
    };
  }

  componentDidMount() {
    this.props.getStations();
    this.setState({ totalRecords: this.props.stations.length });
  }

  showStations = stations => {
    let result = null;
    if (stations.length > 0) {
      result = stations.map((station, index) => {
        return <StationItem key={index} station={station} index={index} />;
      });
    }
    return result;
  };

  onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };

  render() {
    let { stations } = this.props;
    let {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    let rowsPerPage = [];
    rowsPerPage = stations.slice(startIndex, endIndex + 1);
    return (
      <div className="section product_list_mng">
        <div className="container-fluid">
          <div className="box_product_control mb-15">
            <h1>QUẢN LÝ STATIONS</h1>
            <CreateStation />
            <div className="row">
              <div className="col-xs-12 box_change_pagelimit mt-15">
                Hiển thị
                <select
                  className="form-control"
                  value={pageLimit}
                  onChange={e =>
                    this.setState({ pageLimit: parseInt(e.target.value) })
                  }
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                sản phẩm
              </div>
            </div>
          </div>

          {/* <div className="box_tbl_list">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">STT</th>
                  <th className="text-center">Tên bến xe</th>
                  <th className="text-center">dia chi</th>
                  <th className="text-center">tinh thanh</th>
                  <th className="text-center">action</th>
                </tr>
              </thead>
              <tbody>{this.showStations(rowsPerPage)}</tbody>
            </table>
          </div> */}

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
              <TableBody>{this.showStations(rowsPerPage)}</TableBody>
            </Table>
          </TableContainer>

          <div className="box_pagination">
            <div className="row">
              <div className="col-xs-12 box_pagination_info text-right">
                <p>
                  {stations.length} stations | Trang {currentPage}/{totalPages}
                </p>
              </div>
              <div className="col-xs-12 text-center ml-30">
                <Pagination
                  totalRecords={stations.length}
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

const mapStateToProps = state => {
  return {
    stations: state.stations
  };
};

export default connect(mapStateToProps, stationActions)(PaginationStations);
