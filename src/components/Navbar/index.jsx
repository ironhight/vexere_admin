import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    const { isAuthenticated, profile } = auth;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <Typography variant="h6">News</Typography> */}
            <Typography variant="h6" style={{ marginRight: "15px" }}>
              {isAuthenticated ? "Da dang nhap" : "Chua dang nhap"}
            </Typography>

            <Typography variant="h6">
              {Object.keys(profile).length > 0 && profile.email}
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                this.props.logout();
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
//navbar tu dong co mapStatetoProps
