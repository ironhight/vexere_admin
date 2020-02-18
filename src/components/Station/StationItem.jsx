import React, { Component } from "react";

class StationItem extends Component {
  render() {
    const { stations, index } = this.props;
    return (
      <tr>
        <td className="col_order text-center">{index + 1}</td>
        <td className="col_name">{stations.name}</td>
        <td className="col_name">{stations.address}</td>
        <td className="col_name">{stations.province}</td>
        <td className="col_name">HAHAHA</td>
      </tr>
    );
  }
}

export default StationItem;
