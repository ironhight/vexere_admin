import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

class TopNavigation extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <Router>
        <MDBNavbar
          color="indigo"
          dark
          className="flexible-navbar"
          expand="md"
          scrolling
        >
          <MDBNavbarBrand
            href="/"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            <strong className="white-text">ADMIN</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick} />
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink
                  to="/admin/dashboard"
                  onClick={() => {
                    this.props.history.push("/admin/dashboard");
                  }}
                >
                  Home
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/admin/profile"
                  onClick={() => {
                    this.props.history.push("/admin/profile");
                  }}
                >
                  Profile
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/manager/stations"
                  onClick={() => {
                    this.props.history.push("/manager/stations");
                  }}
                >
                  Stations
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/manager/trips"
                  onClick={() => {
                    this.props.history.push("/manager/trips");
                  }}
                >
                  Trips
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/manager/tickets"
                  onClick={() => {
                    this.props.history.push("/manager/tickets");
                  }}
                >
                  Tickets
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/manager/users"
                  onClick={() => {
                    this.props.history.push("/manager/users");
                  }}
                >
                  Users
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <a
                  className="nav-link navbar-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/HoaiNamNguyen.NHN"
                >
                  <MDBIcon fab icon="facebook" />
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a
                  className="nav-link navbar-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/Nam03995427"
                >
                  <MDBIcon fab icon="twitter" />
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  onClick={() => {
                    this.props.logout();
                    this.props.history.push("/");
                  }}
                  to="/"
                >
                  Log out
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default withRouter(connect(null, { logout })(TopNavigation));
