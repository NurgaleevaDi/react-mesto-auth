import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const nameRef = React.useRef("");
  const linkRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }
  React.useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="card-popup"
      title="Новое место"
      button="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input-text popup__input-text_type_title"
        id="popup-title"
        name="name"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        ref={nameRef}
      />
      <span id="popup-title-error" className="error"></span>
      <input
        type="url"
        className="popup__input-text popup__input-text_type_image"
        id="popup-image"
        name="link"
        placeholder="Ссылка"
        required
        ref={linkRef}
      />
      <span id="popup-image-error" className="error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
