import React from 'react';
import trash from '../images/trash.svg';
function Card({
    src, name, alt
}) {
    return (
        <article className="elements__item">
          <button className="elements__button-delete" type="button">
            <img src={trash} alt="Удалить"/>
          </button>
          <img className="elements__image" src={src} alt={alt}/>
          <div className="elements__describe">
            <h3 className="elements__name">{name}</h3>
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