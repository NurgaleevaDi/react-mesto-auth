import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(email, password);
  }

  return (
    <>
      <Header link="/sign-in" nameLink="Войти" />

      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__form-title">Регистрация</h2>
        <input
          type="text"
          className="login__form-input"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          required
        ></input>
        <input
          type="password"
          className="login__form-input"
          placeholder="Пароль"
          value={password}
          onChange={handleChangePassword}
          required
        ></input>
        <div className="login__button-container">
          <button type="submit" className="login__button">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <Link className="login__link" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </>
  );
}
export default Register;
