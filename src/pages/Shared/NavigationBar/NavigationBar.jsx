import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut =() =>{
    logOut()
    .then(result =>{

    })
    .catch(error => {
      console.log(error.message)
    });
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='d-flex justify-content-center'>
            <Nav className="d-flex justify-content-center flex-grow-1">
                <Link className='text-decoration-none text-secondary me-2' to='/category/0'>Home</Link>
                <Link className='text-decoration-none text-secondary me-2 ' to='/about'>About</Link>
                <Link className='text-decoration-none text-secondary  me-2' to='/career'>Career</Link>
            </Nav>
            <Nav className='d-flex justify-items-center align-items-center'>
              {
                user && <FaUserCircle style={{ fontSize: '2rem' }}>
                </FaUserCircle>
              }
              {
                user ? <Button onClick={handleLogOut} variant='dark'>Logout</Button> :
                  <Link to='/login'><Button variant='dark'>Login</Button></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;