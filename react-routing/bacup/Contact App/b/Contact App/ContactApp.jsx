import React, { Component } from 'react'
import axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
class ContactApp extends Component {
  constructor(contacts) {
    super(contacts)
    this.state = {
      contacts: [],
    }
  }
  componentDidMount = () => {
    axios
      .get(
        'https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist',
      )
      .then((response) => {
        this.setState({ contacts: response.data })
      })
      .catch(() => {})
  }
  render() {
    return (
      <div>
        <h1>Contact App</h1>
        <div className="container">
          <pre>{JSON.stringify(this.state.contacts)}</pre>
          <div className="row">
            <div className="col-md-8">
              <ContactList value={this.state.contacts} />
            </div>
            <div className="col-md-4">
              <ContactDetails />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactApp
