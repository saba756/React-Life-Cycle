import React , { Component} from 'react';
class DerivedState extends Component {
    constructor(props){
      super(props)
      this.state = {
        currentValue:0
      }
      console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    //console.log("props",props ,state);
    return {
        currentValue :props.derivedData * 5
    };
  }
  render() {
      console.log("render")
    return (
    <div>
    <h1> currentValue  getDerivedStateFromProps:{this.state.currentValue}</h1>
        </div>
    )}
  }
    export default DerivedState;