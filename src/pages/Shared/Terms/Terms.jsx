import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Container className='mt-4'>
      <h2 className='text-center'>Terms and Conditions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores nemo ipsa id? Alias incidunt ullam amet neque nemo non odio, quaerat ad enim magnam exercitationem, deserunt voluptatibus sapiente molestiae repellendus labore placeat eligendi possimus molestias corporis. Fugiat odio recusandae, nostrum quam aut alias deserunt pariatur nulla doloremque molestiae vel optio necessitatibus autem, quisquam molestias obcaecati sed perspiciatis possimus voluptas, natus fugit. Quae sint itaque quaerat, voluptatibus architecto minima labore nisi? Quod accusantium accusamus necessitatibus minima, debitis voluptates magnam ullam totam ducimus in, consectetur dolorum eum quo cum ratione ipsum recusandae voluptas obcaecati numquam aperiam. Harum laborum atque vel a aliquam dicta voluptate aliquid odio alias sequi impedit reprehenderit fugiat sint ea ad autem non exercitationem laudantium asperiores veritatis, suscipit corrupti? Fugiat odit eligendi quas deserunt, sequi quam unde sapiente dignissimos hic magnam porro tenetur atque fugit alias blanditiis consequatur ullam repellat nulla vero. Temporibus iste minima amet fugit aliquid eius repellat quo veritatis impedit, unde accusamus deleniti voluptatibus quidem veniam dicta aspernatur eos error maiores corporis dolor quis. Alias corporis laudantium quos aperiam at dolores nam quam quia cum, doloremque ratione maxime facilis dolore architecto quaerat incidunt velit aspernatur maiores nulla nihil quas ex distinctio unde beatae! Sed, blanditiis?</p>
      <p>Go Back To <Link className='text-decoration-none text-danger' to='/register'>Register</Link></p>
    </Container>
  );
};

export default Terms;