import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0'


  const handleSignInUserWithEmailAndPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <Container className='w-25 mx-auto mt-5 border p-5 m-5'>
      <h2 className='text-center mb-4'>Login your Account</h2>
      <Form onSubmit={handleSignInUserWithEmailAndPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' required placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' required placeholder="Password" />
        </Form.Group>
        <Button className='d-block w-100 mb-2' variant="dark" type="submit">
          Login
        </Button>
        <Form.Text className="ms-5">
          Don't Have an Account? <Link className='text-danger text-decoration-none' to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;