import React from "react";

import {CheckboxContainer } from "./SignUpElements";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <CheckboxContainer>
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
    </CheckboxContainer>
  );
};


export default Checkbox;
