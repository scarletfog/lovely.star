import React from "react";
import { FormProvider, useForm, FieldError } from "react-hook-form";
import * as Styles from "./LoginForm.styled";
import { Button } from "../../atoms/Button";
import { InputField } from "../../molecules/InputField";
import { useSignIn } from "../../../auth/useSignIn";

interface LoginFormData {
  username: string;
  password: string;
}

const validateForm = (values: any) => {
  const errors: {
    username?: FieldError;
    password?: FieldError;
  } = {};

  if (!values.username) {
    errors.username = { type: "required", message: "Username cannot be blank" };
  }

  if (!values.password) {
    errors.password = { type: "required", message: "Password cannot be blank" };
  }

  return {
    values,
    errors,
  };
};

export const LoginForm = () => {
  const formMethods = useForm<LoginFormData>({
    mode: "onSubmit",
    defaultValues: {},
    resolver: validateForm,
  });

  const {
    watch,
    formState: { errors, ...rest },
  } = formMethods;

  const allFields = watch();
  const signIn = useSignIn();

  const onSubmit = async (data: LoginFormData, e: any) => {
    e.preventDefault();
    try {
      signIn({
        username: data.username,
        password: data.password,
      });
    } catch (e: any) {
    }
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <Styles.FormWrapper autoComplete="off" onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Styles.ContentWrapper>
            <Styles.Heading>Sign In.</Styles.Heading>
            <Styles.InputsWrapper>
              <Styles.FormRow>
                <InputField
                  name="username"
                  placeholder="Username"
                  error={errors.username ? errors.username.message : ""}
                />
              </Styles.FormRow>
              <Styles.FormRow>
                <InputField
                  name="password"
                  placeholder="Password"
                  type="password"
                  error={errors.password ? errors.password.message : ""}
                />
              </Styles.FormRow>
              <Styles.FormRow>
                <Button type="submit">Login</Button>
              </Styles.FormRow>
            </Styles.InputsWrapper>
          </Styles.ContentWrapper>
        </Styles.FormWrapper>
      </FormProvider>
    </>
  );
};
