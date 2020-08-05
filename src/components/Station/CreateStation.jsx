import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as stationActions from "../../redux/actions/stations";
import { connect } from "react-redux";
import AddBoxIcon from "@material-ui/icons/AddBox";

function CreateStation({ createStation }) {
  const [input, setInput] = useState({ name: "", address: "", province: "" });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = () => {
    createStation(input);
    setInput({ name: "", address: "", province: "" });
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<AddBoxIcon />}
        onClick={handleClickOpen}
      >
        Thêm bến xe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Bến xe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên bến xe"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Địa chỉ"
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
            fullWidth
            style={{ marginTop: "25px" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="province"
            label="Tỉnh thành"
            type="text"
            name="province"
            fullWidth
            value={input.province}
            onChange={handleChange}
            style={{ marginTop: "25px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Hủy
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(null, stationActions)(CreateStation);
