import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { SignInContainerStyles, ButtonStyles } from "./sign-in.styles";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainerStyles>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          label="email"
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonStyles>
          <CustomButton
            type="submit"
            value="Submit form"
            onClick={(event) => handleSubmit(event)}
          >
            Sign in
          </CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </ButtonStyles>
      </form>
    </SignInContainerStyles>
  );
};
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
