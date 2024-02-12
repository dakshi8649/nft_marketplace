import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";

import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import "./App1.css";
// import App1 from "./App1";
import Dashboard from "./Dashboard";

ReactDOM.render(
  <TransactionsProvider>
    <Dashboard />
  </TransactionsProvider>,
  document.getElementById("root"),
);
