import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as tripActions from "../../../actions/trips";
import { connect } from "react-redux";

function CreateTrip({ createTrip }) {
  const [input, setInput] = useState({
    fromStation: "",
    toStation: "",
    startTime: "",
    price: ""
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e =>
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

  const handleSubmit = () => {
    createTrip(input);
    // console.log("TCL: handleSubmit -> input", input);
    setInput({ fromStation: "", toStation: "", startTime: "", price: "" });
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Thêm Trip
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Trip</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fromStation"
            label="Nơi đi"
            type="text"
            name="fromStation"
            value={input.fromStation}
            onChange={handleChange}
            fullWidth

            // style={{ marginTop: "25px" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="toStation"
            label="Nơi đến"
            type="text"
            name="toStation"
            value={input.toStation}
            onChange={handleChange}
            fullWidth
            style={{ marginTop: "25px" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="startTime"
            label="Giờ xuất phát"
            type="text"
            name="startTime"
            fullWidth
            value={input.startTime}
            onChange={handleChange}
            style={{ marginTop: "25px" }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Giá tiền"
            type="text"
            name="price"
            fullWidth
            value={input.price}
            onChange={handleChange}
            style={{ marginTop: "25px" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(null, tripActions)(CreateTrip);
