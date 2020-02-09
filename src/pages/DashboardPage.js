import React from "react";
import AdminCardSection1 from "./sections/AdminCardSection1";
import TableSection from "./sections/TableSection";
import BreadcrumSection from "./sections/BreadcrumSection";
import ChartSection1 from "./sections/ChartSection1";
import ChartSection2 from "./sections/ChartSection2";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
    </React.Fragment>
  );
};

export default DashboardPage;
