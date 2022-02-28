import React from 'react';
import edit from '../images/edit.svg';
import add from '../images/add.svg';
import Api from '../utils/api.js';
import Card from '../components/Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState([]);
  React.useEffect( () => {
    Api.getUserData(userName).then((data) => {
      setUserName(
        {
          title: data.about
        }
      )
    });
  }, []);
    const [userDescription, setUserDescription] = React.useState([]);
    React.useEffect( () => {
      Api.getUserData(userDescription).then((data) => {
        setUserDescription(
          {
            name: data.name
          }
        )
      });
    }, []);
    const [userAvatar, setUserAvatar] = React.useState([]);
    React.useEffect( () => {
      Api.getUserData(userAvatar).then((data) => {
        setUserAvatar(
          {
            avatar: data.avatar
          }
        )
      });
    }, []);

    const [cards, setCards] = React.useState([]);
    React.useEffect( () => {
      Api.getCards(cards).then((data) => {
        setCards(
          data.map((c) => ({
            src: c.link,
            name: c.name,
            alt: c.name
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
            {cards.map((c) => <Card key={c._id} {...c}/>)}
          </section>
        </main>
    
      </>
    )
}
export default Main;