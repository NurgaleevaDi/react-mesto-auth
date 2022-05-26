import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


function Login(){


    return(
        <>
        {/* <div className="page">
          <div className="page__container"> */}
            <Header link="/sign-up"
                    name="Регистрация" />

            <form className="login__form">
              <h2 className="login__form-title">Вход</h2>
              <input type="text" className="login__form-input" placeholder="Email"></input>
              <input type="text" className="login__form-input" placeholder="Пароль"></input>
            </form>
            <div className="login__button-container">
              <button type="submit" className="login__button">Войти</button>
            </div>

          {/* </div>
        </div> */}
        </>
    )
}
export default Login;