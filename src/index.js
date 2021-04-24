import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/style.css";

import AdminLayout from "./layouts/Admin.js";
import AffectedPeople from "./views/AffectedPeople.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
      <Route path="/affected-people" render={(props) => <AffectedPeople {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


