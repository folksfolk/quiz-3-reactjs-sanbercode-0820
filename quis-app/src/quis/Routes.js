import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from "./index"
import About from "./about"
import MovieIndex from "./MovieIndex"
import logo from './public/img/logo.png'
import Login from './Login'

export default function App() {
  return (
    <Router>
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary static-top" style={{display: "flex", justifyContent: "space-around" }}>
                <div class="container">
                    <div className="logo">
                        <img alt="logo" src={logo} />
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span> </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Movie-List">Movie List</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/About" component={About}/>
                <Route path="/Movie-List" component={MovieIndex}/>
                <Route path="/Login" component={Login}/>
            </Switch>
        </div>
    </Router>
  );
}