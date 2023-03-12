import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAccessibleIcon } from 'react-icons/fa';
import './Login.css';

const AccessCode = () => {
    const [loginCode, setloginCode] = useState("");

    const handleInputChange = () => {

    }
    const AccessCodeUser = () => {

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
                    <form className="form" id="AccessCode">
                        {/* <img src={Logo} size={13} /> */}
                        <h1 className="form__title">Enter Access Code</h1>
                        <FaAccessibleIcon size={30} />

                        <div className="form__input-group">
                            <input type="text"
                                placeholder="Access Code"
                                value={loginCode}
                                name='loginCode'
                                onChange={(e) => setloginCode(e.target.value)}
                            />
                            <p>Check your Email for Login Access</p>

                        </div>
                        <button className="form__button" type="submit">Procced to Login</button>
                        <p className="form__text">
                            <Link className="form__link" to='/'>Back to Home</Link>
                        </p>
                        <p className="form__text">
                            <Link className="form__link" to='/resendCode' >Resend Code</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AccessCode;