import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
import { BsBoxArrowInRight } from 'react-icons/bs';
import Logo from "../../assets/img/logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions';

const Header = () =>  {
  const items = useSelector((state) => state.token);
  const logged = useSelector((state) => state.logged);

  const dispatch = useDispatch();
  return (
    <div className='header'>
      <section className="top-nav">
        <div className='top-logo'>
          <LazyLoadImage
            alt="logo"
            src={Logo}
          />
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
          <span className='menu-button'></span>
        </label>
        <ul className="menu">
          <li className='home-li'>
            <Link to="/#" className='fa-home react-icons'>
              <div className='icon-margin'>
                <FaHome size={30} />
              </div>
              Delivery In Toronto<br/>(416)977-1111
            </Link>
          </li>
          <li>
            {
              logged 
              ? <div className='icon-margin md-account'>
                  <MdAccountCircle size={30} /> {items.name}
                </div>
            
              : <Link to="/signup" className='md-account react-icons'>
                  <div className='icon-margin'>
                    <MdAccountCircle size={30} />
                  </div>
                  Create Account
                </Link>
            }
            
          </li>
          <li>
            {
              logged
              ? 
                <div className='md-box-arrow react-icons'>
                  <BsBoxArrowInRight style={{marginRight: "10px"}} size={30} />
                  <div onClick={() => dispatch(logOut(items))}>Log Out</div> 
                </div>
              : <Link to="/signIn" className='md-box-arrow react-icons'>
                  <div className='icon-margin'>
                    <BsBoxArrowInRight size={30} />
                  </div>
                  Login
                </Link> 
            }
          </li>
        </ul>
      </section>
    </div>
  )
    
  
}

export default Header;