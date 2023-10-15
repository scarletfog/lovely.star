import React, { FC } from "react";

import { DashboardLayout } from "components/layouts/DashboardLayout";
import { ServersList } from "components/organisms/ServersList";

const DashboardPage: FC = () => {
  return <DashboardLayout title="Main dashboard">
    <div>
      <ServersList />
    </div>
  </DashboardLayout>;
};


export default DashboardPage