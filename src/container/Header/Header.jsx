import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{magin: '2rem 0'}}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus dolor sed sit reprehenderit sequi ducimus, error nam expedita impedit voluptatum id iure unde natus voluptas!
      </p>
      <button type='button' className='custom__button' style={{marginTop: '0.5rem'}}>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
