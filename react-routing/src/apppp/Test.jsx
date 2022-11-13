import React, { Component } from 'react'

class Test extends Component {
  state = {
    counter: 1,
  }
  incrHandler = () => {
    this.setState ({ counter: this.state.counter + 1 })
  }
  decrHandler = () => {
    this.setState ( { counter: this.state.counter - 1 })
  }
  render() {
    return (
      <div>
        <center>
          <button onClick={this.decrHandler} className="btn btn-success">
            decr
          </button>
          <h1>counter:{this.state.counter}</h1>
          <button onClick={this.incrHandler} className="btn btn-info">
            incr
          </button>
        </center>
      </div>
    )
  }
}

export default Test
