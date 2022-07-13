import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup-image ${
        props.card.link && props.card.name ? "popup_opened" : ""
      }`}
    >
      <div className="popup-overlay popup-overlay-image popup__close"></div>
      <div className="popup-image__content">
        <button
          className="popup-image__button popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup-image__image"
          src={props.card.link}
          alt="Изображение"
        />
        <p className="popup-image__title"></p>
      </div>
    </div>
  );
}
export default ImagePopup;
