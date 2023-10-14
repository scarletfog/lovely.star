import React from "react";

import { Button } from "components/atoms/Button";
import { InputField } from "components/molecules/InputField";
import { useSignOut } from "auth/useSignOut";

import * as Styles from "./PageHeader.styled";

interface PageHeaderData {
  username: string;
  password: string;
}

export const PageHeader = () => {


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
      <div>
        <Button onClick={handleClickSignOut} type="button">Sign out</Button>
      </div>
    </>
  );
};
