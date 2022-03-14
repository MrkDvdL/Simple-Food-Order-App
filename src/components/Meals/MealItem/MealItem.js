import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["Meal-item-wrapper"]}>
      <div>
        <h3 className={classes["Meal-item__title"]}>{props.name}</h3>
        <div className={classes["Meal-item__description"]}>
          {props.description}
        </div>
        <div className={classes["Meal-item__price"]}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
