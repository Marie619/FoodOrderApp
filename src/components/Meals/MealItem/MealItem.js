import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemsForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>

        <div className={classes.description}> {props.description}</div>
        <div>{price}</div>
      </div>

      <div>
        <MealItemsForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
