import { Button, Container, Navbar, Col } from 'react-bootstrap';
import { FaRegClock, FaList } from 'react-icons/fa';
import NavBrand from '../../assets/images/brand.svg';
import NavTimer from '../../assets/images/timer.svg';
import NavMenu from '../../assets/images/menu.svg';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const NavHome: React.FC = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img src={NavBrand} alt='' />
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                <FaRegClock />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/history'>
                <FaList />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <Navbar expand='lg'>
    //   <Container className='nav__container'>
    //     <Col>
    //       <NavLink to='/' title='Home'>
    //         <Navbar.Brand>
    //           <img src={NavBrand} alt='' />
    //         </Navbar.Brand>
    //       </NavLink>
    //     </Col>
    //     <Col className='nav__link'>
    //       <NavLink className='text-secondary' to='/' title='Timer'>
    //         <FaRegClock />
    //       </NavLink>
    //       <NavLink
    //         className='nav__link text-secondary'
    //         to={'/history'}
    //         title='History'
    //       >
    //         <FaList />
    //       </NavLink>
    //     </Col>
    //   </Container>
    // </Navbar>
  );
};

export { NavHome };
