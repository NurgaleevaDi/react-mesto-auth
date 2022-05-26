import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


function Register(){


    return(
        <>
            <Header link="/sign-in"
                    name="Войти" />

            <form className="login__form">
              <h2 className="login__form-title">Регистрация</h2>
              <input type="text" className="login__form-input" placeholder="Email"></input>
              <input type="text" className="login__form-input" placeholder="Пароль"></input>
            </form>
            <div className="login__button-container">
              <button type="submit" className="login__button">Зарегистрироваться</button>
            </div>
              <Link className="login__link" to="/">Уже зарегистрированы? Войти</Link>
             

        </>
    )
}
export default Register;