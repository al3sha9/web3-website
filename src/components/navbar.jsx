import { useEffect, useState } from 'react';
import './header.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function NavbarTop() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');

      if (window.scrollY > 0) {
        navbar.classNameList.add('scrolled');
      } else {
        navbar.classNameList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg text-dark py-4 border-b bg-body-tertiary">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <a className="navbar-brand" href="#">Alpha</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Open Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Ecosystem</a>
              </li>
            </ul>
            <form className="d-flex barbar" role="search">
              <a className="fa-solid fa-bars" onClick={handleShow}></a>

              
            </form>
            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
          </div>
        </div>
      </nav>
    </>
  )
}