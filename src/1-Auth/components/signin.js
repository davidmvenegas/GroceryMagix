import { useRef } from "react"
import { useUserContext } from "../context/userContext"

const Signin = () => {
  const emailRef = useRef()
  const psdRef = useRef()
  const { signInUser, setResetPassword } = useUserContext()

  const onSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = psdRef.current.value
    if (email && password) signInUser(email, password)
  }

  return (
    <div className="auth-form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input className="auth-input" placeholder="Email" type="email" ref={emailRef} />
        <input className="auth-input" placeholder="Password" type="password" ref={psdRef} />
        <button className="auth-button" type="submit">Sign In</button>
        <p id="forgotPass" onClick={() => setResetPassword(true)}>Forgot Password?</p>
      </form>
    </div>
  )
}

export default Signin
