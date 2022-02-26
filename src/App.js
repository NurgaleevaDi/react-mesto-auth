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
import './index.css';
import logo from './images/logo.svg';
import custo from './images/custo.jpg';
import edit from './images/edit.svg';
import add from './images/add.svg';
import trash from './images/trash.svg';

function App() {
return (
<body className="page">
  <div className="page__container">
    <header className="header section page__header">
      <img className="header__logo" src={logo} alt="Логотип Место Россия"/>       
    </header>
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
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2021 Mesto Russia
      </p>
    </footer>
    <div className="popup profile-popup">
      <div className="popup-overlay popup__close"></div>
      <div className="popup__content">  
        <button className="popup__button popup__close" type="button">
        </button>
        <form className="popup__input popup__input_profile" name="popup__input_profile">
          <h2 className="popup__input-title">Редактировать профиль</h2>
          <input type="text" className="popup__input-text popup__input-text_type_name" id="popup-name" name="name" placeholder="Имя" required
            minlength="2" maxlength="40" /> 
          <span id="popup-name-error" className="error"></span>
          <input type="text" className="popup__input-text popup__input-text_type_specialty" id="popup-specialty" name="about" placeholder="Специальность" required
            minlength="2" maxlength="200" />
          <span id="popup-specialty-error" className="error"></span>
          <button type="submit" className="popup__input-button">
            Сохранить
          </button>
        </form>
      </div> 
    </div>
    <div className="popup card-popup">
      <div className="popup-overlay popup-overlay-card popup__close"></div>
      <div className="popup__content">  
        <button className="popup__button popup__button_card popup__close" type="button">
        </button>
        <form className="popup__input popup__input_newEl" name="popup__input_newEl">
          <h2 className="popup__input-title">Новое место</h2>
          <input type="text" className="popup__input-text popup__input-text_type_title" id="popup-title" name="name" placeholder="Название" required
            minlength="2" maxlength="30" /> 
          <span id="popup-title-error" className="error"></span>
          <input type="url" className="popup__input-text popup__input-text_type_image" id="popup-image" name="link" placeholder="Ссылка" required />
          <span id="popup-image-error" className="error"></span>
          <button type="submit" className="popup__input-button popup__input-button_card">
            Создать
          </button>
        </form>
      </div> 
    </div>
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
  <div className="popup confirm-popup">
    <div className="popup-overlay popup__close"></div>
    <div className="popup__content">  
      <button className="popup__button popup__close" type="button">
      </button>
      <form className="popup__input popup__input_confirm-delete" name="popup__input_profile">
        <h2 className="popup__input-title">Вы уверены</h2>
        <button type="submit" className="popup__input-button popup__input-button_confirm">
          Да
        </button>
      </form> 
    </div> 
  </div>  
  <div className="popup avatar-popup">
    <div className="popup-overlay popup__close"></div>
    <div className="popup__content">  
      <button className="popup__button popup__close" type="button">
      </button>
      <form className="popup__input popup__input_profile" name="popup__input_profile">
        <h2 className="popup__input-title">Обновить аватар</h2>
        <input type="url" className="popup__input-text popup__input-text_type_image popup__input-text_type_avatarUrl" id="popup-avatar" name="name" placeholder="Ссылка на аватар" required
          minlength="2" maxlength="300"/> 
        <span id="popup-avatar-error" className="error"></span>
        <button type="submit" className="popup__input-button">
          Сохранить
        </button>
      </form>
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