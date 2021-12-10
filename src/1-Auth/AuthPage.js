import React from 'react'
import './authpage.css'
import Auth from './components/auth'
import { useNavigate } from 'react-router-dom';

function AuthPage({ loading, error, user }) {
    const navigate = useNavigate();

    function logUserInDatabase() {
        fetch("http://localhost:9293/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({
                firebase_id : user.uid,
            }),
        })
        .then((r) => r.json())
        .then(() => console.log(user))
    }

    return (
        <div className="auth-container">
            {error && <p className="auth-error">{error}</p>}
            {loading ? <h2 className="auth-loading-message">Loading...</h2> : <> {user ? (logUserInDatabase(), navigate('/home')) : <Auth />} </>}
        </div>
    )
}

export default AuthPage