import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/profile/myProfile/index";
import StationsPage from "./pages/StationsPage";
import TripsPage from "./pages/TripsPage";
import TicketsPage from "./pages/TicketsPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/admin/dashboard" exact component={DashboardPage} />
        <Route path="/admin/profile" exact component={ProfilePage} />
        <Route path="/manager/stations" exact component={StationsPage} />
        <Route path="/manager/trips" exact component={TripsPage} />
        <Route path="/manager/tickets" exact component={TicketsPage} />
        <Route path="/manager/users" exact component={UsersPage} />
        <Route path="/404" exact component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
