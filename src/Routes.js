// import React from "react";
// import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import StationsPage from "./pages/StationsPage";
import TripsPage from "./pages/TripsPage";
import TicketsPage from "./pages/TicketsPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";

// import CreateTrip from "./components/Manager/Trip/CreateTrip";
// import UpdateStation from "./components/Manager/Station/UpdateStation";

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: DashboardPage
  },
  {
    path: "/admin/profile",
    exact: false,
    component: ProfilePage
  },
  {
    path: "/manager/stations",
    exact: false,
    component: StationsPage
  },
  {
    path: "/manager/trips",
    exact: false,
    component: TripsPage
  },
  {
    path: "/manager/tickets",
    exact: false,
    component: TicketsPage
  },
  {
    path: "/manager/users",
    exact: false,
    component: UsersPage
  },
  {
    path: "/404",
    exact: true,
    component: NotFoundPage
  }
];
// class Routes extends React.Component {
//   render() {
//     return (
//       <Switch>
//         <Route path="/manager" exact component={DashboardPage} />
//         {/* <Route path="/manager" component={DashboardPage} /> */}
//         <Route path="/manager/trips" exact component={Trip} />
//         <Route path="/manager/trips/create-trip" exact component={CreateTrip} />
//         <Route path="/manager/stations" exact component={Station} />
//         <Route
//           path="/manager/stations/:stationId/update-station"
//           exact
//           component={UpdateStation}
//         />
//         <Route path="/profile" component={ProfilePage} />
//         <Route path="/station" component={TablesPage} />
//         <Route path="/tables" component={TablesPage} />
//         <Route path="/maps" component={MapsPage} />
//         <Route path="/404" component={NotFoundPage} />
//       </Switch>
//     );
//   }
// }

// export default Routes;
export { routesAdmin };
