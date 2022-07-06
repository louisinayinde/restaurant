import React from 'react';

import './Newsletter.css';
import { subHeading } from '../../components'

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <subHeading title="newsletter" />
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
    </div>
  </div>
);

export default Newsletter;
