import React from 'react';
import edit from '../images/edit.svg';
import add from '../images/add.svg';
import Api from '../utils/api.js';
import Card from '../components/Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect( () => {
    Api.getUserData(userName).then((data) => {
      setUserName({title:data.about}); 
      setUserDescription({name:data.name});
      setUserAvatar({avatar:data.avatar});
    });
  }, []);
  React.useEffect( () => {
    Api.getCards(cards).then((data) => {
      setCards(
        data.map((card) => ({
          src: card.link,
          name: card.name,
          alt: card.name,
          id: card._id,
        }))
      )
    })

  }, []);
    
    return (
      <>
        <main className="page__content">
          <div className="profile">
            <img className="profile__image" src={userAvatar.avatar} alt="Аватар"/>
            <div className="profile__image-edit" onClick={props.onEditAvatar}>
            </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName.title}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}>
              <img src={edit} alt="Кнопка - редактирование"/>
            </button>
            <p className="profile__subtitle">{userDescription.name}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
            <img src={add} alt="Кнопка - добавить"/>
          </button>
          </div>
          <section className="elements">
            {cards.map((card) => <Card key={card.id} {...card} onCardClick={props.onCardClick}/>)}
          </section>
        </main>
    
      </>
    )
}
export default Main;