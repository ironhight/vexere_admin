import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as stationActions from "../redux/actions/stations";
import UpdateIcon from "@material-ui/icons/Update";

function UpdateStation(props) {
  const [input, setInput] = useState({ name: "", address: "", province: "" });

  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    const { name, province, address } = props.station;
    setInput({ name, province, address });
  }, [props.station]);

  const onSubmit = (e) => {
    const { _id } = props.station;
    props.updateStation(_id, input);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        endIcon={<UpdateIcon />}
        onClick={handleClickOpen}
      >
        Cập nhật
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Station</DialogTitle>
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
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stations: state.stations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateStation: (id, data) => dispatch(stationActions.updateStation(id, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateStation);
