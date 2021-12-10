import React from 'react'
import './authpage.css'
import Auth from './components/auth'
import { useNavigate } from 'react-router-dom';

function AuthPage({ loading, error, user }) {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
        <h1 className="landing-header-title-auth">Grocery Magi<span>x</span></h1>
            {error && <p className="auth-error">{error}</p>}
            {loading ? <h2 className="auth-loading-message">Loading...</h2> : <> {user ? navigate('/home') : <Auth />} </>}
        </div>
    )
}

export default AuthPage