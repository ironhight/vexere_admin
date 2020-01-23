import React from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";

/**
 * Return false when no have token and token expred, Ngược lại return true.
 * decode.exp la 1 so co dang numbericdate
 * getTime() return về mini giây của kiểu numbericday
 */
const checkTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const decoded = jwtDecode(token);
  if (decoded.exp < new Date().getTime() / 1000) return false; //token ket han
  return true;
};

/**
 * @todo: take a component and return a new component
 */
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
      //   console.log(state.auth.isAuthenticated && !checkTokenValid());
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
