import React from 'react';
import '../index.css';  
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(!isEditProfilePopupOpen); 
}
function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
}
function handleEditAvatarClick() {
  setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
}
function handleCardClick(name, link) {
  setSelectedCard({name: name, link: link});
}

function closeAllPopups() {
  setIsEditProfilePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard({});
}

return (
<body className="page">
  <div className="page__container">
    <Header />
    <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
     />
    <Footer />
    <PopupWithForm name="profile-popup" 
                   title="Редактировать профиль" 
                   button="Сохранить" 
                   isOpen={isEditProfilePopupOpen} 
                   onClose={closeAllPopups}>
      <input type="text" className="popup__input-text popup__input-text_type_name" id="popup-name" name="name" placeholder="Имя" required
        minLength="2" maxLength="40" /> 
      <span id="popup-name-error" className="error"></span>
      <input type="text" className="popup__input-text popup__input-text_type_specialty" id="popup-specialty" name="about" placeholder="Специальность" required
        minLength="2" maxLength="200" />
      <span id="popup-specialty-error" className="error"></span>
    </PopupWithForm>
    <PopupWithForm name="card-popup" 
                   title="Новое место" 
                   button="Создать" 
                   isOpen={isAddPlacePopupOpen} 
                   onClose={closeAllPopups}>
      <input type="text" className="popup__input-text popup__input-text_type_title" id="popup-title" name="name" placeholder="Название" required
        minLength="2" maxLength="30" /> 
      <span id="popup-title-error" className="error"></span>
      <input type="url" className="popup__input-text popup__input-text_type_image" id="popup-image" name="link" placeholder="Ссылка" required />
      <span id="popup-image-error" className="error"></span>
    </PopupWithForm>
    <PopupWithForm name="confirm-popup" 
                   title="Вы уверены?" 
                   button="Да" />
    <PopupWithForm name="avatar-popup" 
                   title="Обновить аватар" 
                   button="Сохранить" 
                   isOpen={isEditAvatarPopupOpen} 
                   onClose={closeAllPopups}>
      <input type="url" className="popup__input-text popup__input-text_type_image popup__input-text_type_avatarUrl" id="popup-avatar" name="name" placeholder="Ссылка на аватар" required
        minLength="2" maxLength="300"/> 
      <span id="popup-avatar-error" className="error"></span>
    </PopupWithForm>
    <ImagePopup card={selectedCard} 
                onClose={closeAllPopups}/>
  </div> 
</body>

);
}
export default App;