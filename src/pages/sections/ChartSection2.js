import React, { Component } from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from "mdbreact";
import { Line, Doughnut } from "react-chartjs-2";

class ChartSection2 extends Component {
  render() {
    const dataLine = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Chuyến đi",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    const dataDoughnut = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120, 24, 52],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#ac64ad"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#da92db"
          ]
        }
      ]
    };
    return (
      <MDBRow className="mb-4">
        <MDBCol md="12" lg="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader>Số lượng chuyến đi theo tháng</MDBCardHeader>
            <MDBCardBody>
              <Line data={dataLine} options={{ responsive: true }} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader>Radar chart</MDBCardHeader>
            <MDBCardBody>
              <Radar
                data={dataRadar}
                height={300}
                options={{ responsive: true }}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol> */}
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader>Số lượng người dùng theo tháng</MDBCardHeader>
            <MDBCardBody>
              <Doughnut
                data={dataDoughnut}
                height={300}
                options={{ responsive: true }}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default ChartSection2;
