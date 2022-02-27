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
import '../index.css';
import trash from '../images/trash.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
return (
<body className="page">
  <div className="page__container">
    <Header />
    <Main />
    <Footer />
    <PopupWithForm name="profile-popup" title="Редактировать профиль" button="Сохранить">
      <input type="text" className="popup__input-text popup__input-text_type_name" id="popup-name" name="name" placeholder="Имя" required
        minlength="2" maxlength="40" /> 
      <span id="popup-name-error" className="error"></span>
      <input type="text" className="popup__input-text popup__input-text_type_specialty" id="popup-specialty" name="about" placeholder="Специальность" required
        minlength="2" maxlength="200" />
      <span id="popup-specialty-error" className="error"></span>
    </PopupWithForm>
    <PopupWithForm name="card-popup" title="Новое место" button="Создать">
      <input type="text" className="popup__input-text popup__input-text_type_title" id="popup-title" name="name" placeholder="Название" required
        minlength="2" maxlength="30" /> 
      <span id="popup-title-error" className="error"></span>
      <input type="url" className="popup__input-text popup__input-text_type_image" id="popup-image" name="link" placeholder="Ссылка" required />
      <span id="popup-image-error" className="error"></span>
    </PopupWithForm>
    <PopupWithForm name="confirm-popup" title="Обновить аватар" button="Да" />
    <PopupWithForm name="avatar-popup" title="Новое место" button="Сохранить">
      <input type="url" className="popup__input-text popup__input-text_type_image popup__input-text_type_avatarUrl" id="popup-avatar" name="name" placeholder="Ссылка на аватар" required
        minlength="2" maxlength="300"/> 
      <span id="popup-avatar-error" className="error"></span>
    </PopupWithForm>

    <div className="popup popup-image">
      <div className="popup-overlay popup-overlay-image popup__close"></div>
      <div className="popup-image__content">
        <button className="popup-image__button popup__close" type="button">
        </button>
        <img className="popup-image__image" src="#" alt="Изображение"/>
        <p className="popup-image__title"></p>
      </div>  
    </div>
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