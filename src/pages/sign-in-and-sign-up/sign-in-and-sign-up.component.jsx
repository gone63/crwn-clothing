import React from "react";

import { SignInAndSignUpWrapperStyles } from "./sign-inand-sign-up.styles";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <SignInAndSignUpWrapperStyles>
    <SignIn />
    <SignUp />
  </SignInAndSignUpWrapperStyles>
);

export default SignInAndSignUp;
