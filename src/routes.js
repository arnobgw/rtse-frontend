import Dashboard from "./views/Dashboard.js";
import AffectedPeople from "./views/AffectedPeople.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/affected-people",
    name: "Affected People",
    icon: "nc-icon nc-circle-09",
    component: AffectedPeople,
    layout: "/admin",
  },
];

export default dashboardRoutes;
