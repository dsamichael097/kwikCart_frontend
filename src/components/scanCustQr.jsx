import React, { Component } from "react";
import Scanner from "./common/scanner";

class ScanCustQr extends Component {
  state = {};

  showCustomerOrder = (sessionId) => {
    //Check if session ID is valid by validating it from database
    //If session ID is valid then redirect the emp to the page which
    //shows the orders placed by the customer
    //Here for now we assume that the sessionId passed is valid and therefore
    //Redirect him to the next page
  };

  render() {
    return (
      <React.Fragment>
        <center>
          <h1 style={{ marginTop: 50 }}>Welcome to KwikCart</h1>
        </center>
        <Scanner newQrScanned={this.showCustomerOrder} />
        <center>
          <h3 style={{ marginTop: 30 }}>
            Scan the Customer's QR to finalize his order
          </h3>
        </center>
      </React.Fragment>
    );
  }
}

export default ScanCustQr;
