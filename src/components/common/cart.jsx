import React from "react";
import "../css/cart.css";

const Cart = ({ items, onIncrement, onDecrement }) => {
  return (
    <div className="container cart-container">
      {items.map((item) => (
        <React.Fragment>
          <div className="row" key={item._id}>
            <div className="col-4 col-md-3 item-container">
              <img
                src={item.img}
                alt={item.name}
                className="img-responsive product-image"
                style={{ float: "left" }}
                min-height="90"
              />
            </div>
            <div className="offset-md-2 col product-desc product-name product-count inline">
              <h6>
                <strong>{item.name}</strong>
              </h6>
              <strong>
                &#8377;{item.price} <span className="text-muted"> x </span>
              </strong>
              <form action="#" className="count-inlineflex">
                <div className="qtyminus" onClick={() => onDecrement(item)}>
                  -
                </div>
                <input
                  type="text"
                  name="quantity"
                  value={item.qty}
                  className="qty"
                  readOnly
                />
                <div className="qtyplus" onClick={() => onIncrement(item)}>
                  +
                </div>
              </form>
              <strong className="prod-total">
                &#8377;{item.price * item.qty}
              </strong>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
