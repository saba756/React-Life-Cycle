import React, { Component } from "react";
class DidMount extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      status: "In progression...",
    };
  }
  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({
        isLoading: false,
        status: "Completed!",
      });
    }, 2000);
  }

  render() {
    console.log("render called");
    return (
      <div className="App">
        <h1>{this.state.status}</h1>
        {this.state.isLoading ? (
          <h1>Page is Loading.....</h1>
        ) : (
          <h1>Welcome to ciklum.....</h1>
        )}
      </div>
    );
  }
}
export default DidMount;
