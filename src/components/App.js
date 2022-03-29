import React from 'react';
import '../index.css';  
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Api from '../utils/api.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});

const [currentUser, setCurrentUser] = React.useState(''); // исходное состояние надо уточнить

React.useEffect( () => {
  Api.getUserData().then((data) => {
    setCurrentUser(data); // уточнить параметр в скобках
  })
  .catch((err) =>{
    console.log(err);
    }
  );
}, []);


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
  setSelectedCard({name, link});
}
function handleUpdateUser(currentUser){
  console.log(currentUser);
  Api.profileEdit(currentUser.name, currentUser.about).then((data) => {
    setCurrentUser(data);
    
  })
  .catch((err)=>{
    console.log(err);
  })
  .finally(closeAllPopups())
}

function handleUpdateAvatar(currentUser){
  Api.editUserAvatar(currentUser.avatar).then((data) => {
    setCurrentUser(data);
    closeAllPopups();
  })
  .catch((err)=>{
    console.log(err);
  })
  
}

function closeAllPopups() {
  setIsEditProfilePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setIsAddPlacePopupOpen(false);
  setSelectedCard({});
}
const [cards, setCards] = React.useState([]);
  React.useEffect( () => {
    Api.getCards(cards).then((data) => {
      setCards(
        data.map((card) => ({
          src: card.link,
          name: card.name,
          alt: card.name,
          id: card._id,
          owner: card.owner,
          likes: card.likes,
        })
        )
      )
    })
    .catch((err) =>{
      console.log(err);
      }
    );
  }, []);
  
  function handleCardLike(card) {
   console.log(card);
   console.log(currentUser._id);
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked);
    Api.changeLikeCardStatus(card.id, !isLiked).then((newCard) => {
       setCards((state) => state.map((c) => c._id === card.id ? newCard : c));
     })
     .catch((err)=>{
       console.log(err);
     });
  }

  function handleCardDelete(card) {
    Api.deleteCard(card.id).then((newCard) =>{
      setCards((state) => state.filter((c) => c._id === card.id ? newCard :c));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleAddPlaceSubmit(c){
    Api.addCard(c.name, c.link).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err)=> {
      console.log(err);
    })
  }

return (
<CurrentUserContext.Provider value={currentUser}>
<body className="page">
  <div className="page__container">
    <Header />
    <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}
      cards={cards}
      handleCardLike={handleCardLike}
      handleCardDelete={handleCardDelete}/>
    <Footer />
    <EditProfilePopup isOpen={isEditProfilePopupOpen} 
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser} />
    <AddPlacePopup isOpen={isAddPlacePopupOpen}
                   onClose={closeAllPopups}
                   onAddPlace={handleAddPlaceSubmit} />
  
    {/* <PopupWithForm name="card-popup" 
                   title="Новое место" 
                   button="Создать" 
                   isOpen={isAddPlacePopupOpen} 
                   onClose={closeAllPopups}>
      <input type="text" className="popup__input-text popup__input-text_type_title" id="popup-title" name="name" placeholder="Название" required
        minLength="2" maxLength="30" /> 
      <span id="popup-title-error" className="error"></span>
      <input type="url" className="popup__input-text popup__input-text_type_image" id="popup-image" name="link" placeholder="Ссылка" required />
      <span id="popup-image-error" className="error"></span>
    </PopupWithForm> */}
    <PopupWithForm name="confirm-popup" 
                   title="Вы уверены?" 
                   button="Да" />

    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
                 onClose={closeAllPopups} 
                 onUpdateAvatar={handleUpdateAvatar}/>

    <ImagePopup card={selectedCard} 
                onClose={closeAllPopups}/>
  </div> 
</body>
</CurrentUserContext.Provider>
);
}
export default App;