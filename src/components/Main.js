import React from 'react';
import custo from '../images/custo.jpg';
import edit from '../images/edit.svg';
import add from '../images/add.svg';

function Main() {
    return (
      <>
        <main className="page__content">
          <div className="profile">
            <img className="profile__image" src={custo} alt="Изображение Жака Кусто"/>
            <div className="profile__image-edit">
          </div>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <button className="profile__edit-button" type="button">
              <img src={edit} alt="Кнопка - редактирование"/>
            </button>
            <p className="profile__subtitle"></p>
          </div>
          <button className="profile__add-button" type="button">
            <img src={add} alt="Кнопка - добавить"/>
          </button>
          </div>
          <section className="elements">
          </section>
        </main>
      </>
    )
}
export default Main;