import React, { Component } from 'react'

class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>CONTACT LIST</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <table className="table">
                <thead className="bg-info text-white">
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>CITY</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  (this.props.contacts) && this.props.contacts.map((contact) => {
                    return (
                      <tr>
                        <td>{contact.login.uuid.substr(0, 3)}</td>
                        <td>{contact.name.first}</td>
                        <td>{contact.email}</td>
                        <td>{contact.dob.age}</td>
                        <td>{contact.location.city}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactList
