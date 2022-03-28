import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [value, setValue] = React.useState('');
  const urlRef = React.useRef('');

  function handleChange(e){
      setValue(e.target.value);
      console.log(e.target);
  }
  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: value,
    });
  }

return(
    <PopupWithForm name="avatar-popup" 
                   title="Обновить аватар" 
                   button="Сохранить" 
                   isOpen={props.isOpen} 
                   onClose={props.onClose}
                   onSubmit={handleSubmit}>
      <input type="url" value={value} onChange={handleChange} className="popup__input-text popup__input-text_type_image popup__input-text_type_avatarUrl" id="popup-avatar" name="name" placeholder="Ссылка на аватар" required
        minLength="2" maxLength="300"/> 
      <span id="popup-avatar-error" className="error"></span>
    </PopupWithForm>
    )
}

export default EditAvatarPopup;