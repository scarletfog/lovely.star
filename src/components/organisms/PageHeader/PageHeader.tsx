import React from "react";

import { Button } from "components/atoms/Button";
import { useSignOut } from "auth/useSignOut";

import * as Styles from "./PageHeader.styled";

type PageHeader = {
  title?: string;
};

export const PageHeader = ({ title }: PageHeader) => {
  const signOut = useSignOut();
  const handleClickSignOut = () => {
    try {
      signOut();
    } catch {
      //
    }
  };
  return (
    <>
      <Styles.HeaderWrapper>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Action>
          <Button onClick={handleClickSignOut} type="button">
            Sign out
          </Button>
        </Styles.Action>
      </Styles.HeaderWrapper>
    </>
  );
};
