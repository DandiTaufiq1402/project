import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-global.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-container">
        <ul className='cpp'>
        
        <h3><b>FTIK</b></h3 >
        </ul>
      </div>

      <img className='menu-icon' src={menu_icon} alt="Menu" onClick={toggleMenu} />

      <ul className={`menu-items ${mobileMenu ? 'active' : ''}`}>
        <li>
          <Link to='Hero' smooth={true} offset={-50} duration={500} onClick={closeMenu}>Home</Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle">Profile</span>
          <ul className="dropdown-menu">
          <li><Link to='programs' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Our Program</Link></li>
            <li><Link to='visimisi__details' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Vision and mission</Link></li>
            <li><Link to='curriculum' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Curriculum</Link></li>
              <li><Link to='matkul-container' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Faculty of Information Technology</Link></li>
            {/* Tambahkan lebih banyak opsi program sesuai kebutuhan */}
          </ul>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle">About Us</span>
          <ul className="dropdown-menu">
            <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>FTIK</Link></li>
            <li><Link to='photos-achievements' smooth={true} offset={-150} duration={500} onClick={closeMenu}>Achievements</Link></li>
            <li><Link to='gallery' smooth={true} offset={-150} duration={500} onClick={closeMenu}>Gallery</Link></li>
            <li><Link to='organisasi-container' smooth={true} offset={-150} duration={500} onClick={closeMenu}>Structure</Link></li>
            <li><Link to='academic-guide' smooth={true} offset={-150} duration={500} onClick={closeMenu}>Academic Guide</Link></li>
            <li><Link to='campus' smooth={true} offset={-150} duration={500} onClick={closeMenu}>Campus</Link></li>
            {/* Tambahkan lebih banyak opsi About Us sesuai kebutuhan */}
          </ul>
        </li>
        <li>
          <Link to='Testimonials' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link>
        </li>
        <li>
        </li>
      </ul>
      <Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={closeMenu}>Contact</Link>

    </nav>
  );
};

export default Navbar;











