import React from "react";
import {
  GroupStyles,
  FormInputStyles,
  FormLabelStyles,
} from "./form-input.styles";

const FormInput = ({ label, handleChange, ...otherFormProps }) => (
  <GroupStyles>
    <FormInputStyles {...otherFormProps} onChange={handleChange} />

    {label ? <FormLabelStyles>{label}</FormLabelStyles> : null}
  </GroupStyles>
);

export default FormInput;
