import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiReset } from 'react-icons/bi'
// import Card from '../../component/Card/Card';
import './Login.css';
import PasswordInput from '../../component/passwordInput/PasswordInput';

const initialState = {
    password: '',
    confirm_Password: '',
}

const Reset = () => {
    const [formData, setFormData] = useState(initialState);
    const { password, confirm_Password } = formData;

    const handleInputChange = () => {

    }
    const ResetUser = () => {

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
                    <form className="form" id="Reset">
                        {/* <img src={Logo} size={13} /> */}
                        <h1 className="form__title">Reset Password</h1>
                        <BiReset size={30} />


                        <PasswordInput
                            placeholder="Enter your password"
                            value={password}
                            name='password'
                            onChange={handleInputChange}
                        />
                        <PasswordInput
                            name='Confirm_password'
                            placeholder="Retype password"
                            value={confirm_Password}
                            onChange={handleInputChange} />



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

export default Reset