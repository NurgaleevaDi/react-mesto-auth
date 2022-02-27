import React from "react";

function ImagePopup(){
return(
    
    <div className="popup popup-image">
      <div className="popup-overlay popup-overlay-image popup__close"></div>
      <div className="popup-image__content">
        <button className="popup-image__button popup__close" type="button">
        </button>
        <img className="popup-image__image" src="#" alt="Изображение"/>
        <p className="popup-image__title"></p>
      </div>  
    </div>
)
}
export default ImagePopup;