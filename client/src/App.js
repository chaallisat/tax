import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
// class App extends Component {


  // render() {
    return (
      <div style={{ height: '100%' }}>
        <Nav />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/footer" component={footer} /> */}

            </Switch>
          </Router>
      </div>
    );
  }
// }

export default App;
