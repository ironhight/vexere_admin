import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";

const checkTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const decoded = jwtDecode(token);
  if (decoded.exp < new Date().getTime() / 1000) return false;
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
    componentDidMount() {
      //   const token = localStorage.getItem("token");
      //   if (!token) return this.props.history.push("/");
      //   if (token) {
      //     const decoded = jwtDecode(token);
      //     if (decoded.exp < new Date().getTime() / 1000) {
      //       //token het han
      //       this.props.history.push("/");
      //     }
      //   }
      if (!this.props.auth.isAuthenticated) this.props.history.push("/");
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
  return withRouter(connect(mapStateToProps, null)(Authenticate));
}
