import React, { Component } from "react";

export default class App extends Component {
  state = {
    value: "this was created without using create-react-app",
  };

  render() {
    return <h1>{this.state.value}</h1>;
  }
}
