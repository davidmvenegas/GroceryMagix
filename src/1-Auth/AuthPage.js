import React from 'react'
import './authpage.css'
import Auth from './components/auth'
import { useNavigate } from 'react-router-dom';
import FirebaseLogo from '../Images/firebase-logo.png'
import GoogleLogo from '../Images/google-logo.png'

function AuthPage({ loading, error, user }) {
    const navigate = useNavigate();

    return (
        <div className="auth-container">
            <h1 style={loading ? {display: "none"} : null} onClick={() => navigate('/')} className="landing-header-title-auth">Grocery Magi<span>x</span></h1>
                {error && <p className="auth-error">{error}</p>}
                {loading ? <h2 className="auth-loading-message">Loading...</h2> : <> {user ? navigate('/home') : <Auth />} </>}
            <div style={loading ? {display: "none"} : null} className="secured-statement-wrapper">
                <p className='secured-statement-text'>Secured by Firebase - a Google Company</p>
                <div className="secured-statement-image-wrapper">
                    <img id='firebase-logo' src={FirebaseLogo} alt="FireBase Logo" />
                    <span> + </span>
                    <img id='google-logo' src={GoogleLogo} alt="Google Logo" />
                </div>
            </div>
        </div>
    )
}

export default AuthPage