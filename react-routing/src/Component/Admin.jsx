import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Admin = () => {
  let [tabledata, settabledata] = useState([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        console.log(response.data)
        settabledata(response.data)
      })
      .catch()
  }, [])
  let deleteHandler = () => {
    console.log('delete')
  }
  return (
    <div>
      <pre></pre>
      <table className="table table-hover ">
        <thead className="bg-info">
          <tr>
            <th> POST ID</th>
            <th>Id</th>
            <th>Name</th>
            <th>EMAIL</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.length > 0 ? (
            <>
              {tabledata.map((dt) => {
                return (
                  <tr>
                    <td>{dt.postId}</td>
                    <td>{dt.id}</td>
                    <td>{dt.name}</td>
                    <td>{dt.email}</td>
                    <td>
                      {' '}
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
          ) : null}
        </tbody>
      </table>
    </div>
  )
}

export default Admin
