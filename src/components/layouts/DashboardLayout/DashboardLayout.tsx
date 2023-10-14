import * as React from 'react';
import { FC } from 'react';

import { PageHeader } from 'components/organisms/PageHeader';

interface IDashboardLayout {
  children: React.ReactNode
}

export const DashboardLayout: FC<IDashboardLayout> = ({ children }) => {
  return <div>
    <div>
      <PageHeader />
    </div>

    <div>
      {children}
    </div>
  </div>
};
