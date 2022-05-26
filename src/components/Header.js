import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
function Header(props) {
    return (
      <>
        <header className="header section page__header">
          <img className="header__logo" src={logo} alt="Логотип Место Россия"/> 
          <Link to="/sign-up" className="header__link">{props.name}</Link>     
        </header>
      </>
    )
}
export default Header;