import React from "react";
import positivStatus from "../images/positivStatus.svg";
import negativeStatus from "../images/negativeStatus.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.status ? "popup_opened" : ""}`}>
      <div className="popup-overlay popup__close">
        <div className="popup__content">
          <button
            className="popup__button popup__close"
            type="button"
            onClick={props.onClose}
          ></button>
          <form
            className="popup__input popup__input_profile"
            name="popup__input_profile"
          >
            <img
              className="popup__input-image"
              src={props.registerStatus ? positivStatus : negativeStatus}
            ></img>
            <h2 className="popup__input-status">
              {props.registerStatus
                ? "Вы успешно зарегистрировались!"
                : "Что-то пошло не так! Попробуйте еще раз."}
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
