import React, { Component } from 'react'
import ContactApp from './Contact App/ContactApp'
import Navbar from './Contact App/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/contact" ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
