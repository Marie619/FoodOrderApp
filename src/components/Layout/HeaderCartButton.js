import React, { useContext, useState, useEffect } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsBump, setBtnIsBump] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsBump ? classes.bump : ""}`;
  //Useeffect for adding animation to cart button
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsBump(true);
    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
