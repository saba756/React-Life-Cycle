import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
          name: 'Constructor Method',
          didmount: 'previous state is update in 5 sec',
          data: 'This name will change in 5 sec',
          num:100,

        }
      }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        //console.log("props",props ,state);
        return {name: props.nameFromParent}
      }


      componentDidMount() {
        console.log("componentDidMount called");
        setTimeout(() => {
          this.setState({data: "This is a componentDidMount Method"})
          this.setState({didmount: "changed to current state"})
        }, 5000)   
        
      }


      shouldComponentUpdate(pre) {
          console.log("shouldComponentUpdate called");
          if(this.state.num === 100){
              return true;
          }
          else{
            return false;
          }
        //Change to true for state to update
      }


      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate called");
        //console.log("prevProps called", prevProps);
        return document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.didmount
      }

      // componentDidUpdate(prevProps, prevState) {
      //   console.log("componentDidUpdate called");
      //   if(prevState.didmount !== this.state.didmount) {
      //       document.getElementById('statechange').innerHTML = "Yes the state is changed"
      //   }
      //   document.getElementById('current-state').innerHTML = "The current state is " + this.state.didmount
      // }

      componentWillUnmount(){
        console.log("componentWillUnmount called");
        //alert('This will unmount')
    }
    render() {
        console.log("render called");
        return (
            <div>
                {/* This is a {this.state.name}
                <p>{this.state.data}</p> */}
                <p>{this.state.didmount}</p>
                {/* <p>{this.state.num}</p> */}
              
                <p id="previous-state"></p>
                <p id="current-state"></p>
                <p id="statechange"></p>
            </div>
        )
    }
}

export default ChildComponent;
