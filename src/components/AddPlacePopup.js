import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

const nameRef = React.useRef('');
const linkRef = React.useRef('');




//   React.useEffect(()=>{
      
//     setName(currentUser.card);
//     setLink(currentUser.about);
//     console.log(currentUser);
//   },[currentUser]);

  function handleChangeName(e){
      setName(e.target.value);
  }

  function handleChangeLink(e){
      setLink(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault();
      props.onAddPlace({
          name: nameRef.current.value,
          link: linkRef.current.value
      })
  }
  return(
    <PopupWithForm name="card-popup" 
                   title="Новое место" 
                   button="Создать" 
                   isOpen={props.isOpen} 
                   onClose={props.onClose}
                   onSubmit={handleSubmit}>
      <input type="text" className="popup__input-text popup__input-text_type_title"  id="popup-title" name="name" placeholder="Название" required
        minLength="2" maxLength="30" ref={nameRef} onChange={handleChangeName} /> 
      <span id="popup-title-error" className="error"></span>
      <input type="url" className="popup__input-text popup__input-text_type_image" id="popup-image" name="link" placeholder="Ссылка" required 
         ref={linkRef} onChange={handleChangeLink}/>
      <span id="popup-image-error" className="error"></span>
    </PopupWithForm>


    )
}

export default AddPlacePopup;