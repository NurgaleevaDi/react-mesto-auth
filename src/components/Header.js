import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
function Header(props) {
    return (
      <>
        <header className="header section page__header">
          <img className="header__logo" src={logo} alt="Логотип Место Россия"/> 
          <div className="header__info-container">
          <p className="header__user-info">{props.email}</p>
          <Link to={props.link} className="header__link">{props.name}</Link>   
          </div>  
        </header>
      </>
    )
}
export default Header;