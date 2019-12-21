import React from 'react';
import './App.css';
import Login from './components/Auth/Login'
import Navbar from "./components/Auth/Navbar"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Login />
        </div>
    );
}

export default App;
