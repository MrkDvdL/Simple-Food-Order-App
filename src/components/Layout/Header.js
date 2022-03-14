import React from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes["Header-wrapper"]}>
        <h1 className={classes["Header__title"]}>Order ka dito</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["Header__image-wrapper"]}>
        <img src={mealImage} alt="meal" className={classes["Header__image"]} />
      </div>
    </>
  );
};

export default Header;
