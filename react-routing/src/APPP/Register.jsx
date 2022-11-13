import React, { Component } from 'react'

 class Register extends Component {
    state={
        First:"",
        Last:"",
        Email:""

    }
onchangeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})

}
submitHandler=(e)=>{
e.preventDefault();
console.log(e);
}
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2>Rigister Form</h2>
                    <form>
                        <div className='form-group'>
                            <label >First :</label>
                            <input className='form-controle' onChange={this.onchangeHandler} value={this.state.First} type="text" placeholder='enter First name' />
                        </div>
                        <div className='form-group'>
                            <label >Last :</label>
                            <input className='form-controle' onChange={this.onchangeHandler} value={this.state.Last} type="text" placeholder='enter Last name' />
                        </div>
                        <div className='form-group'>
                            <label >Email:</label>
                            <input className='form-controle' type="text" onChange={this.onchangeHandler} value={this.state.Email} placeholder='enter Email' />
                        </div>
                        <div>
                            <input onChange={this.submitHandler} type="button" value="Login" className='btn btn-success' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Register