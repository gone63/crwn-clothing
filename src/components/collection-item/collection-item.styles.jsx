import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const ImageStyles = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooterStyles = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameStyles = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceStyles = styled.span`
  width: 10%;
`;

export const CustomButtonStyles = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const CustomButtonHoverStyles = css`
  display: flex;
  opacity: 0.85;
`;
const ImageHoverStyled = css`
  opacity: 0.8;
`;

export const CollectionItemStyles = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${CustomButtonStyles} {
      ${CustomButtonHoverStyles}
    }
    ${ImageStyles} {
      ${ImageHoverStyled}
    }
  }
`;
