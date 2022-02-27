import React from "react";
function PopupWithForm(props){
    return(
    <div className={`popup ${props.name}`}>
    <div className="popup-overlay popup__close"></div>
    <div className="popup__content">  
      <button className="popup__button popup__close" type="button">
      </button>
      <form className="popup__input popup__input_profile" name="popup__input_profile">
        <h2 className="popup__input-title">{props.title}</h2>
        {props.children}

        {/* <input type="text" className="popup__input-text popup__input-text_type_name" id="popup-name" name="name" placeholder="Имя" required
          minlength="2" maxlength="40" /> 
        <span id="popup-name-error" className="error"></span>
        <input type="text" className="popup__input-text popup__input-text_type_specialty" id="popup-specialty" name="about" placeholder="Специальность" required
          minlength="2" maxlength="200" />
        <span id="popup-specialty-error" className="error"></span> */}
        <button type="submit" className="popup__input-button">
          {props.button}
        </button>
      </form>
    </div> 
  </div>
    )
}
export default PopupWithForm;