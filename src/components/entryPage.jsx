import React, { Component } from "react";
import Scanner from "./common/scanner";

class EntryPage extends Component {
  state = {};

  authorizeEntry = (qrCode) => {
    const { history } = this.props;
    if (qrCode != null) history.push("/cart");
    //alert("Invalid Entry Code");
    // console.log(this.props);
  };

  render() {
    return (
      <React.Fragment>
        <center>
          <h1 style={{ marginTop: 50 }}>Welcome to KwikCart</h1>
        </center>
        <Scanner newQrScanned={this.authorizeEntry} />
        <center>
          <h3 style={{ marginTop: 30 }}>
            Please Scan the QR at the entry gate to gain access to the shopping
            cart
          </h3>
        </center>
      </React.Fragment>
    );
  }
}

export default EntryPage;
