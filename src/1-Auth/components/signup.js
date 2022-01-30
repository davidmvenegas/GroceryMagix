import { useRef } from "react"
import { useUserContext } from "../context/userContext"

const Signup = () => {
  const emailRef = useRef()
  const nameRef = useRef()
  const psdRef = useRef()
  const { registerUser } = useUserContext()

  const onSubmit = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const name = nameRef.current.value
    const password = psdRef.current.value
    if (email && password && name) registerUser(email, password, name)
  }

  return (
    <div className="auth-form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input className="auth-input" placeholder="Email" type="email" ref={emailRef} />
        <input className="auth-input" placeholder="Name" type="name" ref={nameRef} />
        <input className="auth-input" placeholder="Password" type="password" ref={psdRef} />
        <button className="auth-button" type="submit">Register</button>
      </form>
      <p id="ORAuth">OR</p>
      <div className="guest-auth-button">Continue as Guest</div>
    </div>
  )
}

export default Signup
