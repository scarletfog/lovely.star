import * as React from "react";
import { FC } from "react";

import { PageHeader } from "components/organisms/PageHeader";
import * as Styles from "./DashboardLayout.styled";

interface IDashboardLayout {
  children: React.ReactNode;
  title?: string;
}

export const DashboardLayout: FC<IDashboardLayout> = ({ children, title }) => {
  return (
    <>
      <PageHeader title={title} />
      <Styles.DashboarContentWrapper>{children}</Styles.DashboarContentWrapper>
    </>
  );
};
