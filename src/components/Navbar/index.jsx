import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    const { isAuthenticated, profile } = auth;
    // console.log("TCL: Navbar -> render -> this.props", this.props);
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {/* <Typography variant="h6">News</Typography> */}
            <Typography variant="h6" style={{ marginRight: "15px" }}>
              {isAuthenticated && `Hi ${profile.email}`}
            </Typography>

            <Typography variant="h6">
              {/* {Object.keys(profile).length > 0 && profile.email} */}
              <Link to="/profile">Profile</Link>
            </Typography>

            <Button
              color="inherit"
              onClick={() => {
                this.props.logout();
                // this.props.history.push("/");
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

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
//navbar tu dong co mapStatetoProps
