import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ViewSet from "./ViewSet";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      favSet: []
    };
  }

  componentDidMount() {
    this.fetchSets();
  }

  fetchSets = () => {
    fetch("/api/sets")
      .then(response => response.json())
      .then(res => {
        this.setState({
          favSet: res
        });
      });
  };

  render() {
    const favSet = this.state.favSet.map(set => {
      return (
        <div className="card" key={set.id}>
          <Link to={`/set/${set.id}`}>
            <h4> {set.title} </h4>
            <h6>{set.artist}</h6>
            <h6>{set.description}</h6>
          </Link>
        </div>
      );
    });
    return (
      <div>
        <h2 className="banner">Favourite Boiler Room Sets</h2>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path="/">
                <div className="wrapper">
                  <div className="container">{favSet}</div>
                </div>
              </Route>
              <Route exact path="/set/:id" component={ViewSet} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
