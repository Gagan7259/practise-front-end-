import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Example1 = () => {
  let [tabledata, settabledata] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data)
      settabledata(res.data)
    })
  }, [])
  let deleteHandler = () => {
    console.log('delete')
  }
  return (
    <div>
      <h1>example</h1>

      <pre></pre>
      <table className="table table-hover ">
        <thead className="bg-info">
          <tr>
            <th>NAME</th>
            <th>USER NAME</th>
            <th>EMAIL</th>
            <th>ADRESS</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.length > 0 ? 
            <>
              {tabledata.carts.map((cart) => {
                return (
                  <tr>
                    <td>{cart.id}</td>
                    <td>{cart.products}</td>
                    <td>{cart.discountedTotal}</td>
                    <td>{cart.userId}</td>
                    <td>
                      <button className="btn btn-warning ">Update</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={deleteHandler}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </>
           : null}
        </tbody>
      </table>
    </div>
  )
}

export default Example1
