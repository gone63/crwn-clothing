import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const mixinLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;
const shrinkStyle = css`
  ${mixinLabel};
`;

// const getActiveStyles = (props) => {
//   return props.otherFormProps.value.length ? shrinkStyle : null;
// };
export const FormLabelStyles = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
export const FormInputStyles = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  [type="password"] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormLabelStyles}, &:not([value=""]) ~ ${FormLabelStyles} {
    ${shrinkStyle}
  }
`;
export const GroupStyles = styled.div`
  position: relative;
  margin: 45px 0;
  ${FormInputStyles}:focus ~ ${FormLabelStyles} {
    ${shrinkStyle}
  }
`;
