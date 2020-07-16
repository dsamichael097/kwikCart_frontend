import React from "react";
//import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShoppingPage from "./components/shoppingPage";
import EntryPage from "./components/entryPage";
import QrDisplay from "./components/qrDsiplay";
import EmpLogin from "./components/empLoginForm";
import ScanCustQr from "./components/scanCustQr";
import EmpCheckout from "./components/empCheckout";

function App() {
  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route path="/emp/login" component={EmpLogin}></Route>
          <Route path="/emp/checkout/:orderId" component={EmpCheckout}></Route>
          <Route path="/emp/home" component={ScanCustQr}></Route>
          <Route path="/checkout" component={QrDisplay}></Route>
          <Route path="/cart" component={ShoppingPage}></Route>
          <Route path="/" component={EntryPage}></Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
