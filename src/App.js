import React , { Component} from 'react';
import ChildComponent from './child';
import DerivedState from './derivedState';
import CompDidUpdate from './compdidupdate';
import ShouldUpdate from './shouldUpdate';
 import DidMount from './didMount';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Constructor Method',
      derivedState: 0,
      show: true,

    }
    console.log("Constructor called");
}
render() {
  // this.setState({name: 'sba'});
  return (
    <div>
     {/* <p> This is a {this.state.name}</p>
     <h1>Get Derived State from props {this.state.derivedState}</h1>
     <button onClick={() =>{this.setState({derivedState: this.state.derivedState + 1 })} }>Count</button> */}
     <br></br> 
     {/* <button onClick={() => {this.setState({show: !this.state.show})}}>Click me to toggle</button> */}
     <br></br>
     {/* <DerivedState derivedData={this.state.derivedState}/> */}

    {/* {this.state.show ? 
      <ChildComponent 
       nameFromParent="getDerivedStateFromProps Method"/> : null}  */}
{/* 
      <DidMount/> */}
    
     {/* <ShouldUpdate/> */}
     
      <CompDidUpdate/>
    </div>
  )
}



}
export default App;
