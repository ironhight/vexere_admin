import React from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";

const checkTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const decoded = jwtDecode(token);
  if (decoded.exp < new Date().getTime() / 1000) return false; //token ket han
  return true;
};

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: {}
      };
    }

    static getDerivedStateFromProps(props, state) {
      //props moi nhan duoc voi state truoc do
      if (
        props.auth.isAuthenticated !== state.auth.isAuthenticated &&
        !checkTokenValid()
      ) {
        if (!props.auth.isAuthenticated) props.history.push("/");
        return {
          auth: props.auth
        };
      }
      return null;
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };
  return withRouter(connect(mapStateToProps)(Authenticate));
}
