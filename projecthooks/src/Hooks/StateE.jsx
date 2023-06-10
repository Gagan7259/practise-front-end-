import React, { Component } from 'react'

export class StateE extends Component {
constructor(props){
    super(props);
    this.state={
        count:0
    }
}
componentDidMount(){
    this.startCounter()
}
startCounter(){
    setTimeout(()=>{
        this.setState(p=>({count:p.count}),()=>{
            this.startCounter();
        },1000)
    })
}
  render() {
    return (
      <div>
       <button onClick={()=>{this.setState(count+1)}}> {this.state.count}</button>
      </div>
    )
  }
}

export default StateE

