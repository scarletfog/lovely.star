import React from 'react';
import { LoginForm } from '../../organisms/LoginForm/LoginForm';
import * as Styles from './LoginPage.styled';


export const LoginPage = () => {
  return (
    <Styles.PageWrapper>
      <Styles.PageBackground>
        <LoginForm />
      </Styles.PageBackground>
    </Styles.PageWrapper>
  )
}