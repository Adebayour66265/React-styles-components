import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi'
// import Card from '../../component/Card/Card';
import './Login.css';
import PasswordInput from '../../component/passwordInput/PasswordInput';
// import Logo from '../../images/1-removebg-preview.png';
// import '../../index.css'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = () => {

    }
    const loginUser = () => {

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
                    <form className="form" id="login">
                        {/* <img src={Logo} size={13} /> */}
                        <h1 className="form__title">Login</h1>
                        <BiLogIn size={30} />

                        <div className="form__input-grouping">
                            <div className="form__google">
                                <Link to='/google'>
                                    Login with Google
                                </Link>

                            </div>
                        </div>
                        <div className="form__input-group">
                            <input type="email"
                                placeholder="Type in your email"
                                // value={email}
                                name='email'
                                onChange={handleInputChange}
                            />
                        </div>
                        <PasswordInput
                            name='password'
                            placeholder="Type password"
                            // value={password}
                            onChange={handleInputChange}
                        />
                        {/* <div className="form__input-group">
                            <input type="email" className="form__input" autofocus placeholder="Type in your email" value={email} onChange={handleInputChange} />
                            <div className="form__input-error-message"></div>
                        </div> */}

                        <button className="form__button" type="submit">Continue</button>
                        <p className="form__text">
                            <Link className="form__link" to='/forgot'>Forgot your password?</Link>
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

export default Login