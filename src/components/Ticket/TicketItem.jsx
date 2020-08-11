import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { connect } from "react-redux";
import * as ticketAction from "../../redux/actions/ticket";

class TicketItem extends Component {
  render() {
    const { ticket, index } = this.props;
    return (
      <TableRow key={index}>
        <TableCell component="th" scope="row" align="center">
          {index + 1}
        </TableCell>
        <TableCell align="center">{ticket.tripId.fromStation.name}</TableCell>
        <TableCell align="center">{ticket.tripId.toStation.name}</TableCell>
        <TableCell align="center">
          {moment(ticket.tripId.startTime).format("DD/MM/YYYY, HH:mm:ss")}
        </TableCell>
        <TableCell align="center">
          {new Intl.NumberFormat("vi-VN").format(ticket.tripId.price)} đ
        </TableCell>
        <TableCell align="center">{ticket.userId.email}</TableCell>
        <TableCell align="center">{ticket.userId.fullName}</TableCell>
        <TableCell align="center">{ticket.userId.phoneNumber}</TableCell>
        <TableCell align="center">{ticket.seats.map((code) => `${code.code}, `)}</TableCell>
        <TableCell align="center">
          {new Intl.NumberFormat("vi-VN").format(ticket.totalPrice)} đ
        </TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => {
              this.props.deleteById(ticket._id);
            }}
          >
            Xóa
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default connect(null, ticketAction)(TicketItem);
