import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile-popup"
      title="Редактировать профиль"
      button="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input-text popup__input-text_type_name"
        value={name || ""}
        onChange={handleChangeName}
        id="popup-name"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span id="popup-name-error" className="error"></span>
      <input
        type="text"
        className="popup__input-text popup__input-text_type_specialty"
        value={description || ""}
        onChange={handleChangeAbout}
        id="popup-specialty"
        name="about"
        placeholder="Специальность"
        required
        minLength="2"
        maxLength="200"
      />
      <span id="popup-specialty-error" className="error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
