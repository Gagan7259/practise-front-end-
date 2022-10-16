import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
const Example2 = () => {
  let [users, setuser] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data)
        setuser(response.data )
      })
      .catch()
  })
  return (
    <div>
      <h1>EXAMPLE2 COMPONENT</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <table className="table table-hover">
              <thead className="bg-info terxt-white">
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ADRESS</th>
                </tr>
              </thead>
              <tbody>
               {
                users.length>0?<>
                {
                    users.map((user)=>{
                       return  <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.zipcode}</td>
                       </tr>
                    })
                }
                </>:null
               }
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example2
