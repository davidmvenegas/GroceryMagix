import React from 'react'
import './authpage.css'
import Auth from './components/auth'
import { useNavigate } from 'react-router-dom';

function AuthPage({ loading, error, user }) {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            {error && <p className="auth-error">{error}</p>}
            {loading ? <h2 className="auth-loading-message">Loading...</h2> : <> {user ? navigate('/home') : <Auth />} </>}
        </div>
    )
}

export default AuthPage