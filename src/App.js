import React, { Component } from "react";

export class App extends Component {
  render() {
    const Name = "jagadamba";
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Shopping List</h1>
        <h2>Welcome {Name}</h2>
      </div>
    );
  }
}

export default App;
