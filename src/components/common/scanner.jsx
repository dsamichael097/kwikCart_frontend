import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import "../css/scanner.css";

// class Scanner extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="scanner-pos">
//         <img
//           src="https://media1.giphy.com/media/16dIgjWQjikY8/200w.webp?cid=ecf05e47c968b82bfef27a62fea97bd844f0012cc906e05d&rid=200w.webp"
//           alt="Scanner"
//           className="img-pos"
//         />
//       </div>
//     );
//   }
// }

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 5000,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
    this.props.newQrScanned(data);
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 200,
      width: 250,
    };

    return (
      <div className="scanner-container-pos">
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          className="scanner-pos"
        />
        {/* <img
          src="https://media1.giphy.com/media/16dIgjWQjikY8/200w.webp?cid=ecf05e47c968b82bfef27a62fea97bd844f0012cc906e05d&rid=200w.webp"
          alt="Scanner"
          className="img-pos slide-top"
        /> */}
        <hr className="slide-top line-pos" />
        {/* <p>{this.state.result}</p> */}
      </div>
    );
  }
}

export default Scanner;
