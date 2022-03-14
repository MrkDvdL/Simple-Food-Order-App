import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes["Header__button"]}>
      <span className={classes["Button__icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes["Button__badge"]}>3</span>
    </button>
  );
};

export default HeaderCartButton;
