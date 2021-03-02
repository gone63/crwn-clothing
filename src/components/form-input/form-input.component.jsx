import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherFormProps }) => (
  <div className="group">
    <input {...otherFormProps} className="form-input" onChange={handleChange} />

    {label ? (
      <label
        className={`${
          otherFormProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
