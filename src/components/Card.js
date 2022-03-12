import React from 'react';
import trash from '../images/trash.svg';
function Card(props) {
  function handleClick() {
    props.onCardClick(props.name, props.src);
  } 
  
    return (
        <article className="elements__item" onClick={handleClick}>
          <button className="elements__button-delete" type="button">
            <img src={trash} alt="Удалить"/>
          </button>
          <img className="elements__image" src={props.src} alt={props.alt} />
          <div className="elements__describe">
            <h3 className="elements__name">{props.name}</h3>
            <div className = "elements__like">
              <button className="elements__button-like" type="button">
              </button>
              <p className="elements__like-counter"></p>
            </div>
          </div>
        </article>
    )
}

export default Card;