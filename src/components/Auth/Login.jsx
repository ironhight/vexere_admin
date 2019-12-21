import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { login } from "../../actions/auth";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    // const { email, password } = this.state;
    // axios
    //   .post("http://localhost:6789/api/users/login", { email, password })
    //   .then(res => console.log(res))
    //   .catch(console.log);
    this.props.login();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //bo chan to brower(dung extends), tu react, tu core backend: loi khi reqest tu 1 link khac
  //allow cors: cross origin resource shareing
  //origin 3000 goi pai tu origin 6789 , express chan request tu 1 link la, loopback da bat san

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>LOGIN</h1>

        <form onSubmit={this.onSubmit}>
          <TextField
            label="Email"
            onChange={this.onChange}
            name="email"
            id="standard-basic"
            value={email}
          />
          <br />
          <TextField
            name="password"
            id="standard-basic"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            value={password}
            onChange={this.onChange}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  };
};

export default connect(null, mapDispatchToProps)(Login);

// export default Login;
