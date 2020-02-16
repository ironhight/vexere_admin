import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as stationActions from "../redux/actions/stations";

class UpdateStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      province: ""
    };
  }

  componentDidMount() {
    const stationId = this.props.match.params.stationId;
    const station = this.props.stations.find(st => st._id === stationId);
    if (station) {
      this.setState(station);
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { _id, name, address, province } = this.state;
    const data = { _id, name, address, province };
    this.props
      .updateStation(data)
      .then(() => this.props.history.push("/manager/stations"))
      .catch(err => console.log(err));
  };

  render() {
    const { name, address, province } = this.state;
    return (
      <div>
        <h1>CẬP NHẬT STATION</h1>
        <form autoComplete="off" onSubmit={this.onSubmit}>
          <TextField
            id="standard-basic"
            label="name"
            style={{ margin: "15px" }}
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <br />

          <TextField
            type="text"
            id="standard-basic"
            label="address"
            style={{ margin: "15px" }}
            name="address"
            value={address}
            onChange={this.onChange}
          />
          <br />

          <TextField
            type="text"
            id="standard-basic"
            label="province"
            style={{ margin: "15px" }}
            name="province"
            value={province}
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

export default connect(mapStateToProps, stationActions)(UpdateStation);
