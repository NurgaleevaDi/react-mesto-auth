import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


function Login(props){
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(email, password);
  }

    return(
        <>
            <Header link="/sign-up"
                    nameLink="Регистрация" />

            <form className="login__form" onSubmit={handleSubmit}>
              <h2 className="login__form-title">Вход</h2>
              <input type="text" className="login__form-input" placeholder="Email"
              value={email || ''} onChange={handleChangeEmail} required></input>
              <input type="password" className="login__form-input" placeholder="Пароль"
                value={password || ''} onChange={handleChangePassword} required></input>
              <div className="login__button-container">
                <button type="submit" className="login__button">Войти</button>
              </div>
            </form>
        </>
    )
}
export default Login;