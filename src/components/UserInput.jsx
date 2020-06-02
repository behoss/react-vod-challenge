import React, { useState, useEffect } from "react";
import { Inputs } from "./Inputs";
import states from "../assets/states";

export const UserInput = () => {
  // useState hooks
  const [productState, setProductState] = useState({
    state: "",
    errorCode: "",
  });
  const [statusOutput, setStatusOutput] = useState({ title: "", message: "" });
  const [processingTime, setProcessingTime] = useState(false);

  // Simulating server response delay
  const processDelay = (time) => {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => resolve(), time);
    });
  };

  // Handling the error states
  const handleError = () => {
    const { error } = states;
    if (error[productState.errorCode] !== undefined) {
      setStatusOutput({
        title: `${error[`${productState.errorCode}`].title}`,
        message: `${error[`${productState.errorCode}`].message}`,
      });
    } else {
      setStatusOutput({
        title: `${error.DEFAULT.title}`,
        message: `${error.DEFAULT.message}`,
      });
    }
  };

  // Rendering the view
  const renderDefaultView = async () => {
    // Check is processing is on
    if (processingTime) {
      await processDelay(1000);
    }

    switch (productState.state) {
      case "success":
        setStatusOutput({
          title: `${states.success.title}`,
          message: `${states.success.message}`,
        });
        break;
      case "error":
        handleError();
        break;
      default:
        setStatusOutput({
          title: "",
          message: "",
        });
        break;
    }
  };

  const handleCheckbox = () => {
    setProcessingTime(!processingTime);
  };

  // Radio button change state
  const handleChange = (e) => {
    setProductState({
      state: e.target.value,
      errorCode: e.target.dataset.code,
    });
  };

  // useEffect hooks
  useEffect(() => {
    renderDefaultView();
    return () => {};
  }, [productState]);

  return (
    <div>
      <Inputs
        productState={productState.state}
        handleChange={handleChange}
        handleCheckbox={handleCheckbox}
      />
      <div>
        {statusOutput.title !== "" && (
          <div>
            <strong>Status: </strong>
            <p>{statusOutput.title}</p>
          </div>
        )}
      </div>
      <div>
        {statusOutput.message !== "" && (
          <div>
            <strong>Message: </strong>
            <p>{statusOutput.message}</p>
          </div>
        )}{" "}
      </div>
    </div>
  );
};
