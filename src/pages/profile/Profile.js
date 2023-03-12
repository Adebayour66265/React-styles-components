import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/2.png'
import '../auth/Login.css';

const Profile = () => {


    const handleInputChange = () => {

    }

    return (
        <>
            <div className="container">
                <div className="second-div ">
                    <form className="form" id="Profile">
                        <img src={Logo} size={13} alt='profile images' />
                        <p>Role: User</p>
                        <h1 className="form__title">Profile</h1>
                        <div className="form__input-group">
                            <label>Change photo</label>
                            <input type="file"
                                // value={email}
                                name='file'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form__input-group">
                            <label>Change Name</label>
                            <input type="text"
                                placeholder="Enter your name"
                                // value={email}
                                name='email'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form__input-group">
                            <input type="email"
                                placeholder="Type in your email"
                                // value={email}
                                name='email'
                                onChange={handleInputChange}
                            />
                        </div>
                        < div className="form__input-group">
                            <input type="email"
                                placeholder="Type in your email"
                                // value={email}
                                name='email'
                                onChange={handleInputChange} />
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

export default Profile;