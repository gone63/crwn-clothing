import styled, { css } from "styled-components";

export const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const googleSigninButton = css`
  background-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const invertedStylesButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const addToCartStyles = css`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  &:hover {
    display: flex;
    opacity: 0.85;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSigninButton;
  else if (props.inverted) {
    return props.addToCart
      ? addToCartStyles + invertedStylesButton
      : invertedStylesButton;
  } else return buttonStyles;
};

export const CustomButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
