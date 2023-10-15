import React from "react";
import { FormProvider, useForm, FieldError } from "react-hook-form";
import * as Styles from "./LoginForm.styled";
import { Button } from "../../atoms/Button";
import { InputField } from "../../molecules/InputField";
import { useSignIn } from "../../../auth/useSignIn";
import { Hint } from "../../atoms/Hint";
import unicornHead from "../../../assets/images/unicorn3.svg";

interface LoginFormData {
  username: string;
  password: string;
}

const validateForm = (values: LoginFormData) => {
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
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: validateForm,
  });

  const signIn = useSignIn();

  const onSubmit = async (data: LoginFormData, e: any) => {
    e.preventDefault();
    try {
      const res = await signIn({
        username: data.username,
        password: data.password,
      });

      return res;
    } catch (e: any) {
      if (e.response.status === 401) {
        formMethods.setError("root.serverCatch", {
          type: "server",
          message: "Incorrect credentials",
        });
      } else {
        formMethods.setError("root.serverCatch", {
          type: "server",
          message: "Something went wrong with the request, please try again.",
        });
      }
    }
  };

  return (
    <>
      <FormProvider {...formMethods}>
        <Styles.FormWrapper
          autoComplete="off"
          onSubmit={formMethods.handleSubmit(onSubmit)}
          data-testid="LoginForm"
        >
          <Styles.ContentWrapper>
            <Styles.Heading>Sign In.</Styles.Heading>
            <Styles.UnicornWrapper>
              <Styles.Unicorn src={unicornHead} alt="unicorn_head" />
            </Styles.UnicornWrapper>
            <Styles.InputsWrapper>
              <Styles.FormRow>
                <InputField name="username" placeholder="Username" />
              </Styles.FormRow>
              <Styles.FormRow>
                <InputField
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </Styles.FormRow>
              <Styles.FormRow>
                <Button type="submit">Login</Button>
                {formMethods?.formState?.errors?.root && (
                  <Hint>
                    {formMethods?.formState?.errors?.root?.serverCatch.message}
                  </Hint>
                )}
              </Styles.FormRow>
            </Styles.InputsWrapper>
          </Styles.ContentWrapper>
        </Styles.FormWrapper>
      </FormProvider>
    </>
  );
};
