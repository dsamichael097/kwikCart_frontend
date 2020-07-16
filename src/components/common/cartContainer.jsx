import React, { Component } from "react";
import Cart from "./cart";

class CartContainer extends Component {
  render() {
    const { onIncrement, onDecrement, items } = this.props;
    return (
      <Cart onIncrement={onIncrement} onDecrement={onDecrement} items={items} />
    );
  }
}

export default CartContainer;
