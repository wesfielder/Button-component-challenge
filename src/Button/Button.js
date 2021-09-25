import React from "react";
import "./Button.css";
import shopping_cart from "./button-icons/add_shopping_cart_white_24dp.svg";
import cancel_icon from "./button-icons/cancel_white_24dp.svg";
import delete_icon from "./button-icons/delete_outline_white_24dp.svg";
import help_icon from "./button-icons/help_white_24dp.svg";
import pets_icon from "./button-icons/pets_white_24dp.svg";

const Button = (props) => {
  const text = props.text;
  const buttonType = props.buttonType;
  const boxShadow = props.boxShadow;
  const disabled = props.disabled;
  const startIcon = props.startIcon;
  const endIcon = props.endIcon;
  const buttonSize = props.size;
  const color = props.color;

  let buttonText = text ? text : "Default";

  let styleClasses = ["button-base", "box-shadow"];

  // set size
  if (buttonSize === "sm") {
    styleClasses.push("size-sm");
  } else if (buttonSize === "lg") {
    styleClasses.push("size-lg");
  } else {
    styleClasses.push("size-md");
  }

  // set color
  if (color === "primary") {
    styleClasses.push("primary-color");
  } else if (color === "secondary") {
    styleClasses.push("secondary-color");
  } else if (color === "danger") {
    styleClasses.push("danger-color");
  } else {
    styleClasses.push("default-color");
  }

  // set button type
  if (buttonType === "outline") {
    styleClasses.push("outline-button");
  }

  if (buttonType === "text") {
    styleClasses.push("text-button");
    styleClasses = styleClasses.filter((v) => v !== "box-shadow");
  }

  if (boxShadow === "disabled") {
    styleClasses = styleClasses.filter((v) => v !== "box-shadow");
  }

  // add icons
  let preIcon = "";
  if (startIcon === "local_grocery_store") {
    preIcon = shopping_cart;
  } else if (startIcon === "cancel") {
    preIcon = cancel_icon;
  } else if (startIcon === "delete") {
    preIcon = delete_icon;
  } else if (startIcon === "help") {
    preIcon = help_icon;
  } else if (startIcon === "pets") {
    preIcon = pets_icon;
  }

  let afterIcon = "";
  if (endIcon === "local_grocery_store") {
    afterIcon = shopping_cart;
  } else if (endIcon === "cancel") {
    afterIcon = cancel_icon;
  } else if (endIcon === "delete") {
    afterIcon = delete_icon;
  } else if (endIcon === "help") {
    afterIcon = help_icon;
  } else if (endIcon === "pets") {
    afterIcon = pets_icon;
  }

  // add custom class to display hover and focus states
  styleClasses.push(props.className);

  return (
    <button className={styleClasses.join(" ")} disabled={disabled}>
      <div className="button-content">
        {startIcon ? (
          <img className="button-img" src={preIcon} alt="start icon"></img>
        ) : null}
        {buttonText}
        {endIcon ? (
          <img className="button-img" src={afterIcon} alt="end icon"></img>
        ) : null}
      </div>
    </button>
  );
};

export default Button;
