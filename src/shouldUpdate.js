import React, { Component } from "react";
class ShouldUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 1,
    };
    console.log("Constructor called");
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("shouldComponentUpdate called");
    console.log("prevState", prevState);
    // return (prevState.data != this.state.data) ?  false : true
    if (this.state.data === 3) return false;
    else return true;
  }
  render() {
    console.log("render");
    return (
      <div style={{ backgroundColor: "aliceblue" }}>
        <h1>ShouldUpdate Child:{this.state.data}</h1>
        <button
          onClick={() => {
            this.setState({ data: this.state.data + 1 });
          }}
        >
          UpdateState
        </button>
      </div>
    );
  }
}
export default ShouldUpdate;
