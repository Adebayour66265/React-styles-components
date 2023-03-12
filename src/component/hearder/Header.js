import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import '../../css/variable.css';
import '../../css/school-nav.css';
import '../../css/button.css';
import '../../css/animation.css';
import '../../css/school.css';
import '../../css/media-query.css';
import './hearder.css';


const activeLink = ({ isActive }) => (isActive ? "activeLin" : "");

const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")

    }
    return (
        <div className="container active">
            <header>
                <nav className="navbar active">
                    <div className="nav-brand" onClick={goHome}  >
                        {/* <img src={Logo} alt="Education logo" /> */}
                        <h1>Logo</h1>
                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' id="home">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/about' id="home">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='course' id="course">Courses</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='blog' id="blog">Blog</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='help' id="help">Help</Link>
                        </li>
                    </ul>


                    <li>
                        <Link to='register' id="help">
                            <button className="btn btn-primary">
                                <p className="btn-text">Get started</p>
                                <span className="square"></span>
                            </button>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <p className="btn-text">
                            <FaUserCircle size={20} />
                            Hi Nurudeen
                        </p>
                    </li>
                    {/* <li>
                        <Link to='/login' id="help">
                            <button className="btn btn-primary">
                                <p className="btn-text">Login</p>
                            </button>
                        </Link>
                    </li> */}
                    <li>
                        <Link to='/logout' id="help">
                            <button className="btn btn-primary">
                                <p className="btn-text">LogOut</p>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <NavLink to='/profile' id="help" className={activeLink}>
                            <p className="btn-text">Profile</p>
                        </NavLink>
                    </li>


                    <button className="nav-toggle-btn">
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                    </button>
                </nav>
            </header>

        </div >


    )

}

export default Header;