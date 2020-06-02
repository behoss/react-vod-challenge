import React from "react";

export const Checkbox = (props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={props.handleCheckbox}
        />
        {props.label}
      </label>
    </div>
  );
};
