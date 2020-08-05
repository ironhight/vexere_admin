import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/profile/myProfile/MyProfilePage";
import TripsPage from "./pages/TripsPage";
import TicketsPage from "./pages/TicketsPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import EditProfile from "./pages/profile/editProfile/EditProfile";
import UpdateStation from "./pages/UpdateStation";
import CreateTrip from "./pages/CreateTrip";
import PaginationStations from "./pages/PaginationStations";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/admin/dashboard" exact component={DashboardPage} />
        <Route path="/admin/profile" exact component={ProfilePage} />
        <Route path="/admin/profile/edit-profile" exact component={EditProfile} />
        <Route path="/manager/stations" exact component={PaginationStations} />

        <Route path="/manager/trips" exact component={TripsPage} />
        <Route path="/manager/trips/create-trip" exact component={CreateTrip} />
        <Route path="/manager/tickets" exact component={TicketsPage} />
        <Route path="/manager/users" exact component={UsersPage} />
        <Route path="/404" exact component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
