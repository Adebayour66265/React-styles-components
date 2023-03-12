import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const activeLink = ({ isActive }) => (isActive ? "activeLin" : "")

const PageMenu = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")

    }
    return (
        <div className="container active">

            <nav className="navbar active">
                <ul className="navbar-nav">
                    <li>
                        <NavLink to='/profile' id="help" className={activeLink}>
                            <p className="btn-text">Profile</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' id="help" className={activeLink}>
                            Change Password
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' id="users" className={activeLink}>
                            Users
                        </NavLink>
                    </li>


                </ul>



            </nav>

        </div >


    )

}

export default PageMenu;