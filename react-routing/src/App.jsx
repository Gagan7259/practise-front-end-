/* import React, { Component } from 'react'
 *//* import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './project app/Navbar'
import Home from './project app/Home'
import About from './project app/About'
import Dashboard from './project app/Dashboard'
import Pagenotfound from './project app/Pagenotfound'
class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route  path='/about' element={<About/>}/>
          <Route  path='/dashboard' element={<Dashboard/>}/>
          <Route  path='*' element={<Pagenotfound/>}/>

          
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App */
import React from 'react'
import Hoc from './project app/Hoc'

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcome User</h1>
      </center>
    </div>
  )
}

export default Hoc(App)
