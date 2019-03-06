import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

export class ViewSet extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      artist: "",
      description: ""
    };
  }

  componentDidMount() {
    this.fetchSingle();
  }

  fetchSingle = () => {
    fetch(`/api/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          title: res.title,
          artist: res.artist,
          description: res.description
        });
      });
  };

  render() {
    return (
      <div className="wrapper-2">
        <Link to="/" className="btn">
          {" "}
          Back
        </Link>
        <h3>{this.state.title}</h3>
        <div className="card">
          <h4>{this.state.artist}</h4>
          <h6>{this.state.description}</h6>
        </div>
      </div>
    );
  }
}

export default ViewSet;
