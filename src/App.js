import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Auth/Login'
import Navbar from "./components/Navbar/index"
import Manager from "./components/Manager/index"
import jwtDecode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/auth'
import Profile from './components/Profile'

import Trip from './components/Manager/Trip'
class App extends React.Component {
    constructor(props) {
        const token = localStorage.getItem("token")
        if (token) {
            const decoded = jwtDecode(token)
            if (decoded.exp > new Date().getTime() / 1000) {
                setAuthToken(token);
            }
        }
        super(props)
        this.state = { isValid: false }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token) {
            const decoded = jwtDecode(token)
            if (decoded.exp > new Date().getTime() / 1000) {
                //token chi ton tai den giay nen chia 1000
                this.props.setCurrentUser(decoded)
                setAuthToken(token);
            }
        }
    }

    render() {
        // const { isValid } = this.state
        const { auth } = this.props;
        const { isAuthenticated } = auth
        return (
            <div className="App">
                <BrowserRouter>
                    {isAuthenticated && <Navbar />}
                    <Switch>
                        <Route path="/" exact render={(props) => {
                            if (isAuthenticated) return <Redirect to="manager" />
                            return <Login {...props} />
                        }} />

                        <Route path="/manager" exact component={Manager} />
                        <Route path="/manager/trips" exact component={Trip} /> s
                        <Route path="/profile" exact component={Profile} />

                    </Switch>
                </BrowserRouter>
            </div>
        );

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (decoded) => {
            dispatch(setCurrentUser(decoded))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
