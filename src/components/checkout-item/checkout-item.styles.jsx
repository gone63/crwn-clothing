import styled, { css } from "styled-components";

export const CheckoutItemStyles = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainerStyles = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const ImageStyles = styled.img`
  width: 100%;
  height: 100%;
`;
const commonTextStyle = css`
  width: 23%;
`;
const cursorPointerStyle = css`
  cursor: pointer;
`;
export const NameStyles = styled.span`
  ${commonTextStyle}
`;
export const QuantityStyles = styled.span`
  display: flex;
  ${commonTextStyle}
`;

export const ArrowStyles = styled.div`
  ${cursorPointerStyle}
`;

export const ValueStyles = styled.span`
  margin: 0 10px;
`;

export const RemoveButtonStyles = styled.div`
  padding-left: 12px;
  ${cursorPointerStyle}
`;
