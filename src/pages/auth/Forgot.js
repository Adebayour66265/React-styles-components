import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMailBulk } from 'react-icons/fa';
import './Login.css';

const Forgot = () => {

    const handleInputChange = () => {

    }
    const ForgotUser = () => {

    }
    return (
        <>
            <div className="container">

                <div className="first-div">
                    <div className="learnweb3">
                        {/* <img src={Logo} sizes={3} /> */}
                        <div className="learn">
                            <h1>Learn<span>Web3</span></h1>
                            <h1>the right way</h1>
                        </div>

                        <p>Join millions of learners in the</p>
                        <p>Web3 space </p>
                    </div></div>
                <div className="second-div">
                    <form className="form" id="Forgot">
                        {/* <img src={Logo} size={13} /> */}
                        <h1 className="form__title">Forgot Password</h1>
                        <FaMailBulk size={30} />

                        <div className="form__input-grouping">
                        </div>
                        <div className="form__input-group">
                            <input type="email"
                                placeholder="Type in your email"
                                // value={email}
                                name='email'
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className="form__button" type="submit">Continue</button>
                        <p className="form__text">
                            <Link className="form__link" to='/'>Back to Home</Link>
                        </p>
                        <p className="form__text">
                            <Link className="form__link" to='/register' >Don't have an account? Create account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forgot;