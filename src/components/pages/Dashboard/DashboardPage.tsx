import React, { FC } from "react";

import { DashboardLayout } from "components/layouts/DashboardLayout";
import { ServersList } from "components/organisms/ServersList";

const DashboardPage: FC = () => {
  return <DashboardLayout>

    <h1>

      Dashboard
    </h1>
    <div>
      <ServersList />
    </div>

  </DashboardLayout>;
};


export default DashboardPage