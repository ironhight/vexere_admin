import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as stationActions from "../redux/actions/stations";
import * as tripActions from "../redux/actions/trips";
import { connect } from "react-redux";
import _ from "lodash";

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromStation: "",
      toStation: "",
      startTime: "",
      price: ""
    };
  }

  componentDidMount() {
    if (_.isEmpty(this.props.stations)) {
      this.props.getStations();
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { fromStation, toStation, startTime, price } = this.state;
    const data = { fromStation, toStation, startTime, price };
    this.props
      .createTrip(data)
      .then(() => this.props.history.push("/manager/trips"))
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { fromStation, toStation, startTime, price } = this.state;
    return (
      <div>
        <h1>THÊM MỚI TRIP</h1>
        <form onSubmit={this.onSubmit}>
          <FormControl>
            <InputLabel style={{ width: "200px" }} id="fromStation">
              Ga xuất phát
            </InputLabel>
            <Select
              style={{ width: "200px" }}
              labelId="fromStation"
              id="fromStation"
              name="fromStation"
              value={fromStation}
              onChange={this.onChange}
            >
              {this.props.stations.map((elm, index) => {
                return (
                  <MenuItem key={index} value={elm._id}>
                    {elm.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
              value={toStation}
              onChange={this.onChange}
            >
              {this.props.stations.map((elm, index) => {
                return (
                  <MenuItem key={index} value={elm._id}>
                    {elm.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <br />

          <TextField
            type="date"
            id="standard-basic"
            label="startTime"
            style={{ margin: "15px" }}
            name="startTime"
            value={startTime}
            onChange={this.onChange}
          />
          <br />
          <TextField
            type="number"
            id="standard-basic"
            label="price"
            style={{ margin: "15px" }}
            name="price"
            value={price}
            onChange={this.onChange}
          />
          <br />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: "15px" }}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stations: state.stations
  };
};

export default connect(mapStateToProps, { ...stationActions, ...tripActions })(
  CreateTrip
);
