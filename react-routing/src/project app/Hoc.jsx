import React from 'react'
import  { Component } from 'react'

const Hoc = (Component1) => {
  return (
    
     class extends Component {
      render() {
        return (
          <div>
            <Component1/>
          </div>
        )
      }
    }
    
  )
}

export default Hoc