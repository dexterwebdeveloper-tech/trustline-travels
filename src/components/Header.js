



import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <header className="header">
      {/* Top header */}
     <div className="header-top bgg-darkk pt-md-2">
  <div className="container">
    <div className="row justify-content-center justify-content-xl-between align-items-center">
      
      <div className="col-auto">
        <div className="header-top-contact">
          <ul className='anchor d-md-flex align-items-center'>

            <li className='px-md-5 fw-bold'>
              <a className='text-white' href="tel:+918087080034">
                <i className="fas fa-phone-volume text-white"></i> +91 8087080034
              </a>
            </li>
              <li className='px-md-5 fw-bold'>
              <a className='text-white' href="tel:+919421185217">
                <i className="fas fa-phone-volume text-white"></i> +91 9421185217
              </a>
            </li>

            <li className='px-md-5'>
              <a className='text-white' href="mailto:booking@trustlinetravels.com">
                <i className="far fa-envelope text-white"></i>
                <span className='text-white fw-bold'> booking@trustlinetravels.com</span>
              </a>
            </li>

            {/* Social Media Links */}
            <li className="d-flex gap-3">
              <a href="https://www.instagram.com/trustlinetravels/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram text-white"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61591790897396" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f text-white"></i>
              </a>

              <a href="https://x.com/trustlinetravel" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter text-white"></i>
              </a>

               <a href="https://in.pinterest.com/trustlinetravel33/" target="_blank" rel="noreferrer">
                <i className="fab fa-pinterest-p text-white"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </div>
</div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="">
              <img src="/images/logo.jpg" alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolor"></i> {/* Mobile Menu Icon */}
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mr-auto">
                <Nav.Link href="/" className='fw-bold nav-item'>Home</Nav.Link>

                <NavDropdown title="About" id="about-dropdown">
  <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
  <NavDropdown.Item href="/term-condition">Terms & Condition</NavDropdown.Item>
  <NavDropdown.Item href="/privacy-policy">Privacy Policy</NavDropdown.Item>
</NavDropdown>

                <Nav.Link href="/service"  className='fw-bold nav-item'>Service</Nav.Link>
                <Nav.Link href="/our-fleet"  className='fw-bold nav-item'>Our&nbsp;Fleet</Nav.Link>
                <Nav.Link href="/packages" className='fw-bold nav-item'>Packages</Nav.Link>

                <NavDropdown title="Pune &#8652; Mumbai Cab" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/pune-mumbai-cabs" className='fw-bold nav-item'>Pune &#8652; Mumbai Cab</NavDropdown.Item>
                  <NavDropdown.Item href="/Pune-to-Mumbai-Cabs" className='fw-bold'>Pune to Mumbai Cab</NavDropdown.Item>
                </NavDropdown>
             

                {/* <NavDropdown title="Mumbai &#8652; Pune Cab" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/Mumbai-to-Pune-Daily-Cab" className='fw-bold '>Mumbai to Pune  Cab </NavDropdown.Item>
                </NavDropdown> */}

                <Nav.Link href="/booking" className='fw-bold nav-item'>Booking</Nav.Link>
                <Nav.Link href="/gallery" className='fw-bold nav-item'>Gallery</Nav.Link>

                <NavDropdown title="Contact" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item href="/contact-us" className='fw-bold nav-item'>Contact</NavDropdown.Item>
                  <NavDropdown.Item href="/Enquiry" className='fw-bold '>Enquiry</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Search Area */}
      {isSearchOpen && (
        <div className="search-area">
          <form action="#">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Type Keyword..." />
              <button type="submit" className="search-icon-btn">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
