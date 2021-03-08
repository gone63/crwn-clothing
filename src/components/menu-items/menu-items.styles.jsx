import styled, { css } from "styled-components";

const largeStyle = css`
  height: 380px;
`;
export const BackgroundImgStyles = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentStyles = styled.a`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  background-color: #ffffff;
  opacity: 0.7;
  position: absolute;
  text-decoration: none;
  color: inherit;
`;

export const TitleStyles = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;
const getLargeStyle = (props) => {
  return props.size ? largeStyle : null;
};

export const MenuItemStyles = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;

    & ${BackgroundImgStyles} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ContentStyles} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${getLargeStyle}
`;
