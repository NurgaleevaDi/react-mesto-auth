import React from "react";
import PopupWithForm from "./PopupWithForm";


function InfoTooltip(props) {
//   const urlRef = React.useRef('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     props.onUpdateAvatar({
//       avatar: urlRef.current.value,
//     });
   
//   }
//   React.useEffect(()=>{
//     urlRef.current.value=''
//   }, [props.isOpen])
return(
    <div className={`popup ${props.status ? 'popup_opened' : ''}`}>
      <div className="popup-overlay popup__close">
        <div className="popup__content"> 
          <button className="popup__button popup__close" type="button" onClick={props.onClose}>
          </button>
          <form className="popup__input popup__input_profile" name="popup__input_profile" >
          <h2 className="popup__input-title">{props.registerStatus ? 'ok' : 'err'}</h2>
          </form>
        </div>
      </div>
    </div>
   
   
    )
}

export default InfoTooltip;