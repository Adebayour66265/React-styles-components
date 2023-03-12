import React from 'react'
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './hearder.css';
import Logo from '../../images/1-removebg-preview.png';

const activeLink = ({ isActive }) => (isActive ? "activeLin" : "");

const Headers = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")

    }

    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font[Luto] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2 md:hidden'>
                        <div onClick={() => setOpen(!open)}>
                            <ion-icon name={open ? "close-outline" : "grid-outline"}></ion-icon>
                        </div>
                    </span>

                    <img src={Logo} alt='Proficient Logo' onClick={goHome} className='logo' />

                </div>
                <div className='text-3x1 absolute right-8 top-6 cursor-pointer '>
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
                bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {/* {
                        Links.map((link) => {
                            <li key={link.name} className='md:ml-8 text-x1'>
                                <a href={link.link} className='text-gray-800 hover: text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        })
                    } */}
                    <li className='md:ml-8 text-x1 md:my-0 my-7'>
                        <Link to='/' className='text-gray-800 hover: text-gray-400 duration-500'>
                            Home
                        </Link>
                    </li>
                    <li className='md:ml-8 text-x1 md:my-0 my-7'>
                        <Link to='/about' className='text-gray-800 hover: text-gray-400 duration-500'>
                            About
                        </Link>
                    </li>
                    <li className='md:ml-8 text-x1 md:my-0 my-7'>
                        <Link to='/courses' className='text-gray-800 hover: text-gray-400 duration-500'>
                            Courses
                        </Link>
                    </li>
                    <li className='md:ml-8 text-x1 md:my-0 my-7'>
                        <Link to='/blog' className='text-gray-800 hover: text-gray-400 duration-500'>
                            Blog
                        </Link>
                    </li>

                    <li className='md:ml-8 text-x1 md:my-0 my-7'>
                        <Link to='/register'>
                            <button className='home-btn'>
                                Get started
                            </button>
                        </Link>

                    </li>


                    <li className="md:ml-8 text-x1 cursor-pointer">
                        <FaUserCircle size={20} />
                        <p>Hi Nurudeen</p>
                    </li>
                </ul>


            </div>
        </div>
    )
}

export default Headers