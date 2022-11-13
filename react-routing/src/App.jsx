import React from 'react'
import Register from './APPP/Register'
import Edit from './APPP/Edit'
import Navba from './APPP/Navba'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
<Router>
<Navba/>
    <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit' element={<Edit/>}/>
    </Routes>
</Router>
    </div>
  )
}

export default App