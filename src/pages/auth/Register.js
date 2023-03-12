import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi'
import './Login.css';
import PasswordInput from '../../component/passwordInput/PasswordInput';
import { FaTimes } from 'react-icons/fa';
import { BsCheck2All } from 'react-icons/bs';
// import Logo from '../../images/1-removebg-preview.png';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirm_Password: '',
}
const Register = () => {
    const [formData, setFormData] = useState(initialState);
    const { name, email, password, confirm_Password } = formData;

    const [uCase, setUCase] = useState(false);
    const [num, setNum] = useState(false);
    const [sChar, setSChar] = useState(false);
    const [passLength, setPassLength] = useState(false);


    const timesIcon = <FaTimes color='red' size={10} />

    const checkIcon = <BsCheck2All color='green' size={10} />

    const switchIcon = (condition) => {
        if (condition) {
            return checkIcon
        }
        return timesIcon;
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };

    useEffect(() => {
        // Check your Lower or OpperCase
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            setUCase(true);
        } else {
            setUCase(false);
        }
        // Check your Number
        if (password.match(/([0-9])/)) {
            setNum(true);
        } else {
            setNum(false);
        }
        // Check your special character
        if (password.match(/([0!,%,&,@,#,$,^,*,?,_,~])/)) {
            setSChar(true);
        } else {
            setSChar(false);
        }
        // Check your PASSWORD Length
        if (password.length > 5) {
            setPassLength(true);
        } else {
            setPassLength(false);
        }
    }, [password])
    const loginUser = () => {

    }
    return (
        <>
            <div className="container">

                <div className="first-div">
                    <div className="learnweb3">
                        <div className="learn">
                            <h1>Learn<span>Web3</span></h1>
                            <h1>the right way</h1>
                        </div>

                        <p>Join millions of learners in the</p>
                        <p>Web3 space </p>
                    </div></div>
                <div className="second-div">
                    <form className="form" id="login">
                        {/* <img src={Logo} size={3} /> */}
                        <h1 className="form__title">Register</h1>
                        <BiLogIn size={30} />
                        <div className="form__input-grouping">
                            <div className="form__google">
                                <Link to='/google'>
                                    Register with Google
                                </Link>

                            </div>
                        </div>
                        <div className="form__input-group">
                            <input type="text"
                                className="form__input"
                                name='name'
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleInputChange} />
                        </div>
                        < div className="form__input-group">
                            <input type="email"
                                placeholder="Type in your email"
                                value={email}
                                name='email'
                                onChange={handleInputChange} />
                        </div>
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

                        {/* PASSWORD STRENGTH */}
                        < div className="form__input-group">
                            <ul className='form-list'>
                                <li>
                                    <span className='indicator'>
                                        {switchIcon(uCase)}
                                        &nbsp;Lowercase & UpperCase
                                    </span>
                                </li>
                                <li>
                                    <span className='indicator'>
                                        {switchIcon(num)}
                                        &nbsp;Number (0 - 9)
                                    </span>
                                </li>
                                <li>
                                    <span className='indicator'>
                                        {switchIcon(sChar)}
                                        &nbsp;Special Character (!@#$%^&*.)
                                    </span>
                                </li>
                                <li>
                                    <span className='indicator'>
                                        {switchIcon(passLength)}
                                        &nbsp;At least 6 Character
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <button className="form__button" type="submit">Register</button>
                        <p className="form__text">
                            <Link className="form__link" to='/forgot'>Forgot your password?</Link>
                        </p>
                        <p className="form__text">
                            <Link className="form__link" to='/login' >Already have an account? Login instead</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;