import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import './splash.css'

function SplashPage() {

    const history = useHistory();

    const SessionLogo = () => {
        return (
            <div>
                <NavLink to='/home' className='navlinks' exact={true} activeClassName='active'>
                    <div className="logoPicName">
                        <p className='splashName'> Welcome to timetube </p>
                        <img src='https://clipart.world/wp-content/uploads/2020/09/classic-camera-clipart-transparent.png'
                            alt='' className='splashScreenIcon'
                        // onError={({ e }) => {
                        //     // e.onerror = null;
                        //     e.src = 'https://ih1.redbubble.net/image.1339858831.9273/st,small,845x845-pad,1000x1000,f8f8f8.u1.jpg'
                        // }} 
                        />
                    </div>
                </NavLink>
            </div>
        );
    }

    const loginPage = () => {
        history.push('/login')
    }

    const signupPage = () => {
        history.push('/sign-up')
    }

    return (
        <div className='splashBody'>
            <div className="splash-container">

            </div>
            <div className="splash-img">

            </div>
            <div className="splash-img2">

            </div>
            <div className="splash-img3">

            </div>
            <div className="splashBoxFooter">
                <img src='https://d3c9ouasuy8pg6.cloudfront.net/dist/images/signup-bg-light_baa27c5957a33417853bf54b523adf5a.png'
                    alt='' className='boxFooterImg' />
            </div>
            <div className="textContainer">
                <span> <SessionLogo /> </span>
                <p>
                    a place to capture life's moments
                </p>
                <div className="loginSignupbtn">
                    <label
                        className='splashBtns'
                        onClick={loginPage}>
                        Click to Login
                    </label>

                    <label
                        className='splashBtns'
                        onClick={signupPage}>
                        Click to Sign Up
                    </label>
                </div>
            </div>
        </div>
    )
}


export default SplashPage;