import React from "react";
import { Radio } from "./Radio";
import { Checkbox } from "./Checkbox";

export const Inputs = (props) => {
  return (
    <div>
      <form>
        <Checkbox
          handleCheckbox={props.handleCheckbox}
          label="Add processing time (1s)"
        />
        <Radio
          value="error"
          code=""
          handleChange={props.handleChange}
          label="Error"
        />
        <Radio
          value="error"
          code="NO_STOCK"
          handleChange={props.handleChange}
          label="Error (No stock)"
        />
        <Radio
          value="error"
          code="INCORRECT_DETAILS"
          handleChange={props.handleChange}
          label="Error (Incorrect details)"
        />
        <Radio
          value="success"
          code=""
          handleChange={props.handleChange}
          label="Success"
        />
      </form>
    </div>
  );
};
