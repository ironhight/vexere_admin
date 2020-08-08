import React from "react";
import { MDBCol, MDBRow } from "mdbreact";
import logo from "../assets/images/logo.svg";
import logoNotFound from "../assets/images/logoNotFound.png";
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className="full">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
            <img alt="Error 404" className="img-fluid" hieght="20px" src={logo} />
            <h2 className="h2-responsive mt-3 mb-2">404. Đã có lỗi xảy ra.</h2>
            <h4>URL được yêu cầu không tồn tại trên máy chủ.</h4>
          </MDBCol>
          <MDBCol md="4">
            <img alt="Error 404" className="img-fluid" src={logoNotFound} />
          </MDBCol>
        </MDBRow>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
