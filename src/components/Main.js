import React from 'react';
import custo from '../images/custo.jpg';
import edit from '../images/edit.svg';
import add from '../images/add.svg';

function Main() {
    function handleEditProfileClick() {
       document.querySelector('.profile-popup').classList.add('popup_opened');
    }
    function handleAddPlaceClick() {
        document.querySelector('.card-popup').classList.add('popup_opened');
    }
    function handleEditAvatarClick() {
        document.querySelector('.avatar-popup').classList.add('popup_opened');
    }
    return (
      <>
        <main className="page__content">
          <div className="profile">
            <img className="profile__image" src={custo} alt="Изображение Жака Кусто"/>
            <div className="profile__image-edit" onClick={handleEditAvatarClick}>
            </div>
          <div className="profile__info">
            <h1 className="profile__title"></h1>
            <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}>
              <img src={edit} alt="Кнопка - редактирование"/>
            </button>
            <p className="profile__subtitle"></p>
          </div>
          <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}>
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