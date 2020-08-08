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

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const users = await api.get("users");
    if (users.data && users.data.length > 0) {
      this.setState({ users: users.data });
    }
  }

  deleteUser = async (id) => {
    const users = await api.delete(`users/${id}`);

    if (users.status === 200) {
      const newUsers = this.state.users.filter((user) => user._id !== id);
      this.setState({ users: newUsers });
    }
  };

  renderUsers = () => {
    return this.state.users.map((row, index) => {
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
  };

  render() {
    return (
      <div>
        <h1>Quản lý người dùng</h1>
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
            <TableBody>{this.renderUsers()}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default UsersPage;
