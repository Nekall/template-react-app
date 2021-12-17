import './style/main.scss';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home'
import Page1 from 'pages/Page1'
import Page2 from 'pages/Page2'

const App = () => {

  console.log("Welcome to the React template made by Nekå ✨");

  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/page-1">
              <Page1 />
            </Route>
            <Route path="/page-2">
              <Page2 />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
