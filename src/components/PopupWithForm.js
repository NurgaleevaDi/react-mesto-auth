import React from "react";
function PopupWithForm(props){
    return(
    <div className={`popup ${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
    <div className="popup-overlay popup__close"></div>
    <div className="popup__content">  
      <button className="popup__button popup__close" type="button">
      </button>
      <form className="popup__input popup__input_profile" name="popup__input_profile">
        <h2 className="popup__input-title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__input-button">
          {props.button}
        </button>
      </form>
    </div> 
  </div>
    )
}
export default PopupWithForm;