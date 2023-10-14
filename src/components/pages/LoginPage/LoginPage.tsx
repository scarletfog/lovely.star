import React, { FC } from "react";
import { LoginForm } from "../../organisms/LoginForm/LoginForm";
import * as Styles from "./LoginPage.styled";

const LoginPage: FC = () => {
  return (
    <Styles.PageWrapper>
      <Styles.PageBackground>
        <LoginForm />
      </Styles.PageBackground>
    </Styles.PageWrapper>
  );
};

export default LoginPage;
