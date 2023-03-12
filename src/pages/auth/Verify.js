import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAccessibleIcon } from 'react-icons/fa';
import './Login.css';

const Verify = () => {
    const [loginCode, setloginCode] = useState("");

    const handleInputChange = () => {

    }
    const VerifyUser = () => {

    }
    return (
        <>
            <div className="container">
                <div className="second-div">
                    <form className="form" id="Verify">
                        <h1 className="form__title">Account Verification</h1>
                        <FaAccessibleIcon size={30} />

                        <div className="form__input-group">
                            <p>To Verify your account, click the button below..</p>

                        </div>
                        <button className="form__button" type="submit">Verify Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Verify;