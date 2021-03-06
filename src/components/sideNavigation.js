import React from "react";
import logo from "../assets/images/logo.svg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";

const TopNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed  sn-bg-1">
      <a href="/" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        <NavLink exact={true} to="/admin/dashboard" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="chart-pie" className="mr-3" />
            Tổng quan
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/admin/profile" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="user" className="mr-3" />
            Cá nhân
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/manager/stations" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="warehouse" className="mr-3" />
            Quản lý bến xe
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/manager/trips" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="bus-alt" className="mr-3" />
            Quản lý chuyến xe
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/manager/tickets" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="ticket-alt" className="mr-3" />
            Quản lý vé xe
          </MDBListGroupItem>
        </NavLink>
        <NavLink to="/manager/users" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="users" className="mr-3" />
            Quản lý người dùng
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>
    </div>
  );
};

export default TopNavigation;
