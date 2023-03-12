import React from 'react';
import Footer from '../footer/Footer';
import Headers from '../hearder/Headers';

const Layout = ({ childreen }) => {
    return (
        <>
            <Headers />
            <div style={{ minHeight: "80vh" }} className='section'>
                {childreen}
            </div>
            <Footer />
        </>
    )
}

export default Layout