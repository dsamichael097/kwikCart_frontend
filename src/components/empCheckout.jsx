import React, { Component } from "react";
import CartContainer from "./common/cartContainer";
import "./css/empCheckout.css";
import { getItems } from "../services/fakeCartService";
import Navbar from "./common/navbar";

class EmpCheckout extends Component {
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

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="cart-pos">
          <CartContainer
            onIncrement={this.handleIncrementQty}
            onDecrement={this.handleDecrementQty}
            items={this.state.items}
          />
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              readOnly
              value={
                "Total : " +
                this.state.items.reduce(
                  (total, item) => total + item.qty * item.price,
                  0
                )
              }
              style={{ textAlign: "right" }}
            />
            <div className="input-group-append">
              <span className="input-group-text">&#8377;</span>
            </div>
          </div>
          {/* <div>
            Mobile No. <input type="text"></input>
            <br />
            <br />
            OTP<input type="text"></input>
            <button className="btn btn-sm btn-success ml-3">Verify</button>
            <br />
            <br />
            <button className="btn btn-lg btn-primary">Place Order</button>
          </div> */}
          <table className="table table-borderless mt-3 table-pos">
            <tbody>
              <tr>
                <td align="center" style={{ verticalAlign: "middle" }}>
                  Mobile No
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" style={{ verticalAlign: "middle" }}>
                  OTP
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OTP"
                  />
                </td>
                <td>
                  <button className="btn btn-md btn-success">Verify</button>
                </td>
                <td>
                  <button className="btn btn-md btn-primary">
                    Place Order
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default EmpCheckout;
