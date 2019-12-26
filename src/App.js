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



class App extends React.Component {
    constructor(props) {
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
                this.setState({ isValid: true })
                setAuthToken(token);
            }
        }
    }

    render() {
        const { isValid } = this.state
        return (
            <div className="App">
                <Navbar />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact render={(props) => {
                            if (isValid) return <Redirect to="manager" />
                            return <Login {...props} />
                        }} />

                        <Route path="/manager" exact component={Manager} />
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

export default connect(null, mapDispatchToProps)(App);
