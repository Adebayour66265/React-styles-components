import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import '../../css/variable.css';
// import '../../css/school-nav.css';
import '../../css/button.css';
import '../../css/animation.css';
import '../../css/school.css';
// import '../../css/media-query.css';

function Footer() {
    return (
        // < !--FOOTER -- >
        <>
            <footer>
                <div className="footer-grid">
                    <div className="grid-item">
                        <div className="footer-logo">
                            <h3> LAGOOZ SCHOOLS</h3>
                        </div>

                        <p className="footer-text">
                            Lagos Academy, a precursor to
                            Lagooz Schools, was established in
                            January 2002 to assuage the yearnings
                            of innumerable Lagosians, young and old,
                            who were clamouring for education but could
                            not affort the wherewithal and time to go into
                            full regular schools. While this search was going on,
                            a man with outstanding educational pedigree, Otunba Yomi
                            Otubela, felt touched as a wave of ideas on how best to
                            cater for the educational needs of humanity, especially in
                            Lagos State then, was passing through his mind and giving him
                            sleepless nights. Then a burning zeal to take the bull by the
                            horns (I mean, the urge to take a leap)
                            metamorphosed into what today has trained many enterprising graduates in the Nigerian Society.
                        </p>


                        <div className="social-link">
                            <NavLink target="_blank" className="facebook-link" to="faceboo.com"><i className="uil uil-facebook-f"></i>

                            </NavLink>
                            <NavLink target="_blank" className="facebook-link" to="faceboo.com"><i className="uil uil-instagram"></i></NavLink>
                            <NavLink target="_blank" className="facebook-link" to="faceboo.com"><i className="uil uil-linkedin-alt"></i></NavLink>


                        </div>
                    </div>
                    <ul className="grid-item">
                        <h4 className="item-hearding">Our Link</h4>

                        <li className="list-item"><NavLink to='/'>Home</NavLink></li>
                        <li className="list-item"><NavLink to='/about'>About Us</NavLink></li>
                        <li className="list-item"><NavLink to='/courses'>Courses </NavLink></li>
                        <li className="list-item"><NavLink to='/contact'>Contact us</NavLink></li>
                    </ul>
                    <div className="grid-item">

                        <h4 className="item-hearding">Contact Us</h4>

                        <div className="wrapper">
                            <form>
                                <input type="text" placeholder="Email Address" />
                                <button className="btn btn-primary send-btn">
                                    <p className="btn-text">Contact Us</p>
                                    <span className="square"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                    Copyright &copy; <NavLink to="proficientngi.netlify.app" target='_blank'>Proficient</NavLink> All right reserved.
                </p>

            </footer>

        </>
    )
}

export default Footer