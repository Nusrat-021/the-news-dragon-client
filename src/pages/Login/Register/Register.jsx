import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Terms from '../../Shared/Terms/Terms';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);

  const { createUser } = useContext(AuthContext);
  const handleRegisterWithEmailAndPassword = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // validation
    if (!/(?=.*[0-9])/.test(password)) {
      setError('Please provide at least one number');
      return;
    }
    else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setError('Please provide at least one special character');
      return;
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please provide at least one UpperCase');
      return;
    }
    else if (password.length < 6) {
      setError('Password must be at least six characters');
      return;
    }
    // create user using firebase
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        setError('');
        toast.success('User created successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        form.reset();

      })
      .catch(error => {
        setError(error.message);
      })
  }

  const handleAccepted = (event) => {
    const check = event.target.checked;
    setAccepted(check);
  }

  return (
    <Container className='w-25 mx-auto mt-5 border p-5 m-5'>
      <h2 className='text-center mb-4'>Register your Account</h2>
      <Form onSubmit={handleRegisterWithEmailAndPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' required placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' required placeholder="Enter photo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' required placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"
            onClick={handleAccepted}
            name='accept'
            label={<>Accept <Link to='/terms' className='text-decoration-none text-danger'>
              Terms & Conditions</Link></>} />
        </Form.Group>
        <Button className='d-block w-100 mb-2' disabled={!accepted} variant="dark" type="submit">
          Register
        </Button>
        <Form.Text className="ms-5">
          ALready have an account? <Link className='text-danger text-decoration-none' to='/login'>Login</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success text-center">

        </Form.Text>
        <Form.Text className="text-danger text-center">
          {error}
        </Form.Text>
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default Register;