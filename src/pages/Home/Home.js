import React from 'react';
import '../../css/variable.css';
import '../../css/media-query.css';
import '../../css/school.css';
import '../../css/home.css'
import '../../css/about.css'

const Home = () => {
    return (


        <div class="about-right">
            <p class="section-subtitle">About us</p>
            <h2 class="section-title">We have a best Education Courses</h2>
            <p class="section-text">
                As a leading institution for secondary
                school, vocational and creative education,
                underpinned with a national reputation for research
                excellence, we have much to offer you and your child.
                We take pride in the attention given to our student welfare
                unit, headed by seasoned guidance counselors who are on
                hand to support, assist and advise your child through out
                their time in Lagooz, through the use of modern technology.
            </p>
            <ul class="about-ul">
                <li>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <p> JUPEB UNDERGRADUATE</p>
                </li>
                <li>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <p>SAFEGUARDING AND CHILD PROTECTION POLICY</p>
                </li>
                <li>
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <p>ONLINE REGISTRATION FORM</p>
                </li>
            </ul>
            <button class="btn btn-primary">
                <p class="btn-text">Explore more</p>
                <span class="square"></span>
            </button>
        </div>

    )
}

export default Home