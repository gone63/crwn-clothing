import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
export const CartDropdownStyles = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemStyles = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyCartStyles = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const buttonStyles = css`
  margin-top: auto;
`;

export const CustomButtonStyles = styled(CustomButton)`
  ${buttonStyles}
`;
