import React from "react";
import { connect } from "react-redux";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { SignInContainerStyles, ButtonStyles } from "./sign-in.styles";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainerStyles>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <FormInput
            label="email"
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <ButtonStyles>
            <CustomButton
              type="submit"
              value="Submit form"
              onClick={(event) => this.handleSubmit(event)}
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
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
