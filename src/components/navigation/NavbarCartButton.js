import { useContext } from "react";

import * as AiIcons from "react-icons/ai";
import CartContext from "../store/cart-context";
import classes from "./NavbarCartButton.module.css";

const NavbarCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>
        <AiIcons.AiOutlineShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default NavbarCartButton;
