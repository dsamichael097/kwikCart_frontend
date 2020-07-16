import React from "react";

const CartDetail = ({ totalPrice }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#a" style={{ marginTop: -4 }}>
        KwikCart
      </a>
      <span className="badge badge-pill badge-warning">
        &#8377; {totalPrice}
      </span>
    </nav>
  );
};

export default CartDetail;
