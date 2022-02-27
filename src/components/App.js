// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>  
//   );
// }

// export default App;
import React from 'react';
import '../index.css';
import trash from '../images/trash.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(!isEditProfilePopupOpen); 
}
function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
}
function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}

return (
<body className="page">
  <div className="page__container">
    <Header />
    <Main 
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
     />
    <Footer />
    <PopupWithForm name="profile-popup" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen}>
      <input type="text" className="popup__input-text popup__input-text_type_name" id="popup-name" name="name" placeholder="Имя" required
        minlength="2" maxlength="40" /> 
      <span id="popup-name-error" className="error"></span>
      <input type="text" className="popup__input-text popup__input-text_type_specialty" id="popup-specialty" name="about" placeholder="Специальность" required
        minlength="2" maxlength="200" />
      <span id="popup-specialty-error" className="error"></span>
    </PopupWithForm>
    <PopupWithForm name="card-popup" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen}>
      <input type="text" className="popup__input-text popup__input-text_type_title" id="popup-title" name="name" placeholder="Название" required
        minlength="2" maxlength="30" /> 
      <span id="popup-title-error" className="error"></span>
      <input type="url" className="popup__input-text popup__input-text_type_image" id="popup-image" name="link" placeholder="Ссылка" required />
      <span id="popup-image-error" className="error"></span>
    </PopupWithForm>
    <PopupWithForm name="confirm-popup" title="Вы уверены?" button="Да" />
    <PopupWithForm name="avatar-popup" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen}>
      <input type="url" className="popup__input-text popup__input-text_type_image popup__input-text_type_avatarUrl" id="popup-avatar" name="name" placeholder="Ссылка на аватар" required
        minlength="2" maxlength="300"/> 
      <span id="popup-avatar-error" className="error"></span>
    </PopupWithForm>
    <ImagePopup />
</div>
  

  
<template className="template">
  <article className="elements__item">
    <button className="elements__button-delete" type="button">
      <img src={trash} alt="Удалить"/>
    </button>
    <img className="elements__image"/>
    <div className="elements__describe">
      <h3 className="elements__name"></h3>
      <div className = "elements__like">
        <button className="elements__button-like" type="button">
        </button>
        <p className="elements__like-counter"></p>
      </div>
    </div>
  </article>
</template>
</body>
);
}
export default App;