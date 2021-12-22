import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="auth-box-container">
      {!index ? <Signup /> : <Signin />}
      <p onClick={toggleIndex}>
        {index ? "New user? Click here " : "Already have an acount? Log In"}
      </p>
    </div>
  );
};

export default Auth;
