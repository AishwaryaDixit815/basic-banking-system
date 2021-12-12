import './view.css';
import Features from "./features";
import Contact from "./contact";
import * as Customers from "./Customers"; //imported hook function as a name
import * as Transact from './transact';

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

export default function view() {
    return (
        <Router>
            <div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center bg-image">
                <header className="masthead mb-auto">
                    <div className="inner">
                        <nav className="nav nav-masthead justify-content-center">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" exact to="/features">Features</NavLink>
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                </header>

                <main role="main" className="inner cover">

                    <Switch>
                        {/* <Route exact path="/" render={() => {
                            return (
                                <Home /> //rendering view page (our home page) to / route
                            )
                        }}>
                        </Route> */}
                        <Route exact path="/">
                            <h1 class="cover-heading">Welcome to Sharoo's Banking System.</h1>
                            <p class="lead">
                                <NavLink exact to="/customers" class="btn btn-lg btn-secondary">View all customers</NavLink>
                            </p>
                        </Route>
                        <Route exact path="/customers">
                            <Customers.Cust />
                        </Route>
                        <Route exact path="/features">
                            <Features />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/transact/:id">
                            <Transact.Transact />
                        </Route>
                    </Switch>


                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Made by Aishwarya Dixit, 2021.</p>
                    </div>
                </footer>
            </div>
        </Router >
    )
}
