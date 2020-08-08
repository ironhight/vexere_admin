import React, { Component } from "react";
import api from "../api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Pagination from "../components/Pagination";

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      totalPages: "",
      pageLimit: "",
      currentPage: "",
      startIndex: "",
      endIndex: "",
      users: [],
    };
  }

  async componentDidMount() {
    const users = await api.get("users");
    if (users.data && users.data.length > 0) {
      this.setState({ totalRecords: users.data.length, users: users.data });
    }
  }

  showUser = (users) => {
    if (users.length > 0) {
      return users.map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell component="th" scope="row" align="center">
              {index + 1}
            </TableCell>
            <TableCell align="center">{row.email}</TableCell>
            <TableCell align="center">{row.fullName}</TableCell>
            <TableCell align="center">{row.phoneNumber}</TableCell>
            <TableCell align="center">{row.dayOfBirth}</TableCell>
            <TableCell align="center">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                style={{ marginRight: "10px" }}
                onClick={async () => {
                  this.deleteUser(row._id);
                }}
              >
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    }
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

  deleteUser = async (id) => {
    const users = await api.delete(`users/${id}`);

    if (users.status === 200) {
      const newUsers = this.state.users.filter((user) => user._id !== id);
      this.setState({ users: newUsers, totalRecords: newUsers.length });
    }
  };

  render() {
    let { totalPages, currentPage, pageLimit, startIndex, endIndex } = this.state;
    let rowsPerPage = [];
    if (this.state.users.length > 0) {
      rowsPerPage = this.state.users.slice(startIndex, endIndex + 1);
    }
    return (
      <div className="section product_list_mng">
        <div className="container-fluid">
          <div className="box_product_control mb-15">
            <h1>Quản lý người dùng</h1>

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
                người dùng
              </div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Số thứ tự</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Họ và Tên</TableCell>
                  <TableCell align="center">Số điện thoại</TableCell>
                  <TableCell align="center">Ngày sinh</TableCell>
                  <TableCell align="center">Tùy chọn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.showUser(rowsPerPage)}</TableBody>
            </Table>
          </TableContainer>

          <div className="box_pagination">
            <div className="row">
              <div className="col-xs-12 box_pagination_info text-right">
                <p>
                  {this.state.users.length} Người dùng | Trang {currentPage}/{totalPages}
                </p>
              </div>
              <div className="col-xs-12 text-center ml-30">
                <Pagination
                  totalRecords={this.state.users.length}
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

export default UsersPage;
