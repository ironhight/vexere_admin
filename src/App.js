import React, { Component } from "react";
// import "./index.css";
// import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Login from './components/Auth/Login'
import LoginPage from "./pages/LoginPage";
// import Navbar from "./components/Navbar/index";
// import Manager from "./components/Manager/index";
import jwtDecode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/auth";
// import Profile from "./components/Profile";
// import Trip from "./components/Manager/Trip/TripList";
// import Station from "./components/Manager/Station/StationList";
// import UpdateStation from "./components/Manager/Station/UpdateStation";
// import CreateTrip from "./components/Manager/Trip/CreateTrip";

import Manager from "./pages";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
// import TopNavigation from "./components/topNavigation";
// import sideNavigation from "./components/topNavigation";
// import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp > new Date().getTime() / 1000) {
        setAuthToken(token);
      }
    }
    super(props);
    this.state = { isValid: false };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.exp > new Date().getTime() / 1000) {
        //token chi ton tai den giay nen chia 1000
        this.props.setCurrentUser(decoded);
        setAuthToken(token);
      }
    }
  }

  render() {
    const { auth } = this.props;
    const { isAuthenticated } = auth;
    return (
      <div className="App">
        <BrowserRouter>
          {/* <TopNavigation /> */}
          <Switch>
            <Route
              path="/"
              exact
              render={props => {
                if (isAuthenticated) return <Redirect to="/admin/dashboard" />;
                return <LoginPage {...props} />;
              }}
            />
          </Switch>
          {isAuthenticated && <Manager />}
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: decoded => {
      dispatch(setCurrentUser(decoded));
    }
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
