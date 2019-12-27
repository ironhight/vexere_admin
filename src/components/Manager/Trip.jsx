import React, { Component } from "react";
import { connect } from "react-redux";
import { getTrips } from "../../actions/trips";

class Trip extends Component {
  componentDidMount() {
    this.props.getTrips();
  }

  render() {
    return (
      <div>
        <h1>hahaha</h1>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getTrips: () => {
//             dispatch()
//         }
//     }
// }

export default connect(null, { getTrips })(Trip);
