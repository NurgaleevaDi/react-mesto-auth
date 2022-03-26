import React from 'react';
import edit from '../images/edit.svg';
import add from '../images/add.svg';
import Api from '../utils/api.js';
import Card from '../components/Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  
  const currentUser = React.useContext(CurrentUserContext);
  

  // React.useEffect( () => {
  //   Api.getUserData(userName).then((data) => {
  //     setUserName({title:data.about}); 
  //     setUserDescription({name:data.name});
  //     setUserAvatar({avatar:data.avatar});
  //   })
  //   .catch((err) =>{
  //     console.log(err);
  //     }
  //   );
  // }, []);
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
    // Api.likeCard(card.id);
    Api.changeLikeCardStatus(card.id, !isLiked).then((newCard) => {
       setCards((state) => state.map((c) => c._id === card.id ? newCard : c));
     });
  }

  function handleCardDelete(card) {

  }
    
    return (
      <>
        <main className="page__content">
          <div className="profile">
            <img className="profile__image" src={currentUser.avatar} alt="Аватар"/>
            <div className="profile__image-edit" onClick={props.onEditAvatar}>
            </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
              <img src={edit} alt="Кнопка - редактирование"/>
            </button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
            <img src={add} alt="Кнопка - добавить"/>
          </button>
          </div>
          <section className="elements">
            {cards.map((card) => <Card 
                                  key={card.id} 
                                  {...card} 
                                  onCardClick={props.onCardClick} 
                                  onCardLike={handleCardLike} 
                                  onCardDelete={handleCardDelete}/>)}
          </section>
        </main>
    
      </>
    )
}
export default Main;