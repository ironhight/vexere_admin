import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import _ from "lodash";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: {}
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    // axios
    //   .post("http://localhost:6789/api/users/login", { email, password })
    //   .then(res => console.log(res))
    //   .catch(console.log);
    this.props
      .login({ email, password })
      .then(res => {
        this.props.history.push("/manager");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //bo chan to brower(dung extends), tu react, tu core backend: loi khi reqest tu 1 link khac
  //allow cors: cross origin resource shareing
  //origin 3000 goi api tu origin 6789 , express chan request tu 1 link la, loopback da bat san

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        <h1>LOGIN</h1>

        <form autoComplete="off" onSubmit={this.onSubmit}>
          <TextField
            label="Email"
            name="email"
            id="standard-basic"
            value={email}
            onChange={this.onChange}
            style={{ margin: "15px" }}
          />
          <br />
          <TextField
            name="password"
            id="standard-password-input"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            style={{ margin: "15px" }}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>

        {!_.isEmpty(error) && (
          <SnackbarContent
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar">
                {_.get(this.state, "error.message")}
              </span>
            }
          />
        )}
      </div>
    );
  }
}

export default connect(null, { login })(Login);
