import React, { Component } from 'react'
// import axios from "axios";
import BlogPost from "./commponent/BlogPost";
import HomePage from "./commponent/HomePage";
import Navs from "./commponent/Navs";


import { BrowserRouter, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navs/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/blog">
              <BlogPost />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

