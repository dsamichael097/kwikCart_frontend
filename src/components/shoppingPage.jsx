import React, { Component } from "react";
import Scanner from "./common/scanner";
import CartContainer from "./common/cartContainer";
import CartDetail from "./cart-detail";
import { getItems } from "../services/fakeCartService";

class ShoppingPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const items = getItems();
    this.setState({ items });
  }

  handleIncrementQty = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...this.state.items[index] };
    items[index].qty++;
    this.setState({ items });
  };

  handleDecrementQty = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...this.state.items[index] };
    items[index].qty--;
    if (items[index].qty === 0) items.splice(index, 1);
    this.setState({ items });
  };

  handleSubmit = () => {
    if (this.state.items.length === 0) {
      alert(
        "You need to add some items to cart before proceeding for checkout"
      );
    } else this.props.history.push("/order");
  };

  addNewProduct = (productId) => {
    //Check if productId already exists in cart
    //then increment it's qty by 1
    //or do nothing
    //If product id does not exist in cart
    //Then call the server to get the product
    //And add it to our list of items
    //For now we'll display it in alert
    //alert("Product recently scanned : " + productId);
  };

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <Scanner newQrScanned={this.addNewProduct} />
        <CartDetail
          totalPrice={items.reduce(
            (total, item) => total + item.qty * item.price,
            0
          )}
        />
        <CartContainer
          onIncrement={this.handleIncrementQty}
          onDecrement={this.handleDecrementQty}
          items={this.state.items}
        />
        <nav className="navbar navbar-dark bg-primary">
          <button
            onClick={this.handleSubmit}
            className="btn btn-warning btn-sm place-order"
          >
            Place Order
          </button>
        </nav>
      </React.Fragment>
    );
  }
}

export default ShoppingPage;
