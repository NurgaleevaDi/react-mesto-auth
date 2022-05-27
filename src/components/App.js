import React from 'react';
import '../index.css';  
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Login from './Login';
import Register from './Register';
import Api from '../utils/api.js';
// import auth from '../utils/auth.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth.js';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';





function App() {

const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState({});

const [currentUser, setCurrentUser] = React.useState({}); 

const [registerStatus, setRegisterStatus] = React.useState(false);
const [status, setStatus] = React.useState(false);
const [loggedIn, setLoggedIn] = React.useState(false);
const [userEmail, setUserEmail] = React.useState('');
const history = useHistory();

React.useEffect( () => {
  Api.getUserData().then((data) => {
    setCurrentUser(data); 
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
  setStatus(false);
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

  function handleRegister(email, password) {
    setStatus(true);
    
    return auth.register(email, password).then(() => {
      setRegisterStatus(true);
      history.push('/sign-in')
    })
  }

  function handleLogin(email, password) {
    return auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          
          tokenCheck();
        }
      })
  }

  function tokenCheck() {
   
    if (localStorage.getItem('jwt')){
      let jwt = localStorage.getItem('jwt');
      auth.getContent(jwt).then((res) => {
        if(res) {
          setUserEmail(res.data.email);
          setLoggedIn(true);
        }
      })
    }
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in')
  }


return (
<>

<CurrentUserContext.Provider value={currentUser}>
<body className="page">
  <div className="page__container">
  
  <Switch>
  
    <ProtectedRoute path="/" loggedIn={loggedIn}>
    
    <Header name="Выйти" 
            link="/sign-in"
            email={userEmail}
            handleSignOut={handleSignOut}
            />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}/>
    </ProtectedRoute>
    <Footer />
  </Switch>
    
    <EditProfilePopup isOpen={isEditProfilePopupOpen} 
                      onClose={closeAllPopups}
                      onUpdateUser={handleUpdateUser} />
    <AddPlacePopup isOpen={isAddPlacePopupOpen}
                   onClose={closeAllPopups}
                   onAddPlace={handleAddPlaceSubmit} />
    <PopupWithForm name="confirm-popup" 
                   title="Вы уверены?" 
                   button="Да" />
    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} 
                 onClose={closeAllPopups} 
                 onUpdateAvatar={handleUpdateAvatar}/>

    <ImagePopup card={selectedCard} 
                onClose={closeAllPopups}/>

    <InfoTooltip status={status} 
                 registerStatus={registerStatus}
                 onClose={closeAllPopups}/>

<Route path="/sign-in">
  <Login handleLogin={handleLogin}/>
</Route>
<Route path="/sign-up">
  <Register handleRegister={handleRegister} 
            link={"/sign-in"}/>
</Route>
<Route>
  {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
</Route>

  </div> 
</body>
</CurrentUserContext.Provider>




</>
);
}
export default App;