import React, { Component } from 'react'

 class Edit extends Component {
  render() {
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2>Edit Form</h2>
                    <form>
                        <div className='form-group'>
                            <label >First :</label>
                            <input className='form-controle' type="text" placeholder='enter First name' />
                        </div>
                        <div className='form-group'>
                            <label >Last :</label>
                            <input className='form-controle' type="text" placeholder='enter last name' />
                        </div>
                        <div className='form-group'>
                            <label >Email</label>
                            <input className='form-controle' type="text" placeholder='enter Email' />
                        </div>
                        <div>
                            <input type="button" value="Login" className='btn btn-success' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Edit
