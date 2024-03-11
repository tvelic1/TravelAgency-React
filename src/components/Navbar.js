import React, { useState, useEffect } from 'react';
import { Button } from './Button';

import '../css/Navbar.css';
import { Link, ScrollLink } from 'react-scroll' ;
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom and rename it to RouterLink



function Navbar({ flag, izadji }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <RouterLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </RouterLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <RouterLink to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </RouterLink>
            </li>
            <li className='nav-item'>
              <Link to='card' className='nav-links' smooth={true} offset={0} duration={500}>Avantura</Link>
            </li>
            <li className='nav-item'>
            <RouterLink to='/dest' className='nav-links' onClick={closeMobileMenu}>
                Destinacije
              </RouterLink>
              </li>
            {flag && <li className='nav-item'>
              <RouterLink
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rezervacije
              </RouterLink>
            </li>}

            <li>
              <RouterLink
                to='/sign-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Out
              </RouterLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' whereTo='' onClick={() => izadji()}>    {flag ? "SIGN OUT" : "SIGN IN"}
          </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;