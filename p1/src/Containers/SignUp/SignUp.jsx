import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import signup from '../../Assets/sign.svg'
const SignUp = () => {
  return (

    <div className='container mt-5'>
      <section className='d-flex justify-content-between'>
        <div className='left_data mt-4' style={{width:"100%"}}>
          <h3 className=' text-center col-lg-4'>SignUp</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Your name" />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" className='col-md-5 text-center' style={{backgroundColor:"rgb(68,185,127"}} type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className='right_data'>
          <div className='r_image mt-5' style={{width:"100%"}}>
            <img src={signup} style={{maxWidth:500}} alt='resource not found' />
          </div>
        </div>
      </section>

    </div>
  )
}

export default SignUp
