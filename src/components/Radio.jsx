import React from "react";

export const Radio = (props) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="radio-input"
          value={props.value}
          data-code={props.code}
          onChange={props.handleChange}
        />
        {props.label}
      </label>
    </div>
  );
};
