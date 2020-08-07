import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as stationActions from "../redux/actions/stations";
import * as tripActions from "../redux/actions/trips";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import UpdateIcon from "@material-ui/icons/Update";
import moment from "moment";

function UpdateTrip(props) {
  const [input, setInput] = useState({
    fromStation: "",
    toStation: "",
    startTime: "",
    price: "",
  });

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
    const { trip } = props;
    const { fromStation, toStation, startTime, price } = trip;
    setInput({ fromStation, toStation, startTime: moment(startTime).format("YYYY-MM-DD"), price });
    props.getStations();
  }, []);

  const handleSubmit = (e) => {
    const { trip } = props;
    props.updateTrip(trip._id, input);
    setOpen(false);
  };

  console.log(input.startTime);
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
        <DialogTitle id="form-dialog-title">Thêm mới chuyến xe</DialogTitle>
        <DialogContent>
          <FormControl>
            <InputLabel style={{ width: "200px" }} id="fromStation">
              Ga xuất phát
            </InputLabel>
            <Select
              style={{ width: "200px" }}
              labelId="fromStation"
              id="fromStation"
              name="fromStation"
              defaultValue={props.trip.fromStation._id}
              onChange={handleChange}
            >
              {props.stations.results.map((elm, index) => {
                return (
                  <MenuItem key={index} value={elm._id}>
                    {elm.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel style={{ width: "200px" }} id="toStation">
              Ga đến
            </InputLabel>
            <Select
              style={{ width: "200px" }}
              labelId="toStation"
              id="toStation"
              name="toStation"
              //   value={input.toStation}
              onChange={handleChange}
              defaultValue={props.trip.toStation._id}
            >
              {props.stations.results.map((elm, index) => {
                return (
                  <MenuItem key={index} value={elm._id}>
                    {elm.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <br />
          <br />
          <TextField
            type="date"
            id="standard-basic"
            style={{ margin: "15px" }}
            name="startTime"
            value={input.startTime}
            onChange={handleChange}
          />
          <br />
          <TextField
            type="number"
            id="standard-basic"
            label="Giá tiền"
            style={{ margin: "15px" }}
            name="price"
            value={input.price}
            onChange={handleChange}
          />
          <br />
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

const mapStateToProps = (state) => {
  return {
    stations: state.stations,
  };
};

export default connect(mapStateToProps, { ...stationActions, ...tripActions })(UpdateTrip);
