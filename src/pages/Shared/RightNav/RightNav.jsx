import React from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className='mt-4'>Login With</h4>
        <Button className='my-2' variant="outline-primary"><FaGoogle />  Login with Google</Button>
        <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
      </div>
      <div className='my-4'>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook className='text-primary'></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
        <QZone></QZone>
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightNav;