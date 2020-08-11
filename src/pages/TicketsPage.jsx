import React, { Component } from "react";
import { connect } from "react-redux";
import * as ticketAction from "../redux/actions/ticket";
import Authenticate from "../HOC/Authenticate";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "../components/Pagination";
import TicketItem from "../components/Ticket/TicketItem";

class TicketsPage extends Component {
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
    this.props.getAllTicket();
    this.setState({ totalRecords: this.props.tickets.list.length });
  }

  showTrips = (tickets) => {
    let result = null;
    result = tickets.map((ticket, index) => {
      return <TicketItem key={index} ticket={ticket} index={index} />;
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
    let { tickets } = this.props;
    let { totalPages, currentPage, pageLimit, startIndex, endIndex } = this.state;
    let rowsPerPage = [];
    if (tickets.list.length > 0) {
      rowsPerPage = tickets.list.slice(startIndex, endIndex + 1);
    }
    return (
      <div className="section product_list_mng">
        <div className="container-fluid">
          <div className="box_product_control mb-15">
            <h1>Quản lý vé xe</h1>

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
                vé xe
              </div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Stt</TableCell>
                  <TableCell align="center">Nơi đi</TableCell>
                  <TableCell align="center">Nơi đến</TableCell>
                  <TableCell align="center">Ngày, giờ xuất phát</TableCell>
                  <TableCell align="center">Giá tiền một ghế</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Tên</TableCell>
                  <TableCell align="center">Số điện thoại</TableCell>
                  <TableCell align="center">Mã ghế</TableCell>
                  <TableCell align="center">Tổng thanh toán</TableCell>
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
                  {tickets.list.length} Vé xe | Trang {currentPage}/{totalPages}
                </p>
              </div>
              <div className="col-xs-12 text-center ml-30">
                <Pagination
                  totalRecords={tickets.list.length}
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
    tickets: state.tickets,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    getAllTicket: () => dispatch(ticketAction.getAll()),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(Authenticate(TicketsPage));
