import { useState } from "react"
import { useUserContext } from "../context/userContext"
import Signin from "./signin"
import Signup from "./signup"
import ForgotPassword from "./forgotpassword"

const Auth = () => {
  const { resetPassword } = useUserContext()

  const [index, setIndex] = useState(false)
  const toggleIndex = () => {
    setIndex((prevState) => !prevState)
  }

  return (
    <div className="auth-box-container">
      {resetPassword ? <ForgotPassword/> : (!index ? <Signup /> : <Signin />)}
      <p id="switchAuth" onClick={toggleIndex}>
        {!resetPassword && (index ? "New user? Click here " : "Already have an acount? Log In")}
      </p>
    </div>
  )
}

export default Auth
