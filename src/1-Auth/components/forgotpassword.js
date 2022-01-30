import { useRef } from "react"
import { useUserContext } from "../context/userContext"
import Swal from 'sweetalert2'

const ForgotPassword = () => {
    const { forgotPassword, setResetPassword } = useUserContext()
    const emailRef = useRef()

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value
        forgotPassword(email)
        .then(emailRef.current.value = "")
        .then(Swal.fire(
            'Thank You!',
            'Please check email for password reset instructions',
        ))
    }

    return (
        <div className="auth-form">
            <h2 id="resetPassForm">Reset Your Password</h2>
            <form onSubmit={forgotPasswordHandler}>
                <input className="auth-input" placeholder="Email" type="email" ref={emailRef} required />
                <button className="auth-button" type="submit">Reset Password</button>
                <p id="rpBACK" onClick={() => setResetPassword(false)}>Go Back to Login</p>
            </form>
        </div>
    )
}

export default ForgotPassword