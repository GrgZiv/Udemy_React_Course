import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux/es/exports";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";
import React from "react";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
