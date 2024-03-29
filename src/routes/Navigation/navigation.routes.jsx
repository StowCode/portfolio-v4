import { Fragment, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../../comps/footer/footer.comp';
import { motion } from 'framer-motion';

import '../Navigation/navigation.styles.scss';
import SideBar from '../../comps/sidebar/sidebar.comp';
import Resume from '../../static/resume2.pdf';


const Navigation = () => {
    const [isOn, setIsOn] = useState(false);

    

    return(
        <Fragment>

            <div className='navbar'>
                <Link to='/'>
                    <img className='nav-logo' src='https://ucarecdn.com/aac08051-ae26-4543-b75b-857732aaeb05/-/preview/-/quality/smart/' alt='stowcode logo'/>
                </Link>
                <ul className='navlinks'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/projects'>Projects</Link>
                    <a href={Resume} download='Stowman-Resume'><span className='resume-btn link'>Resum&eacute;</span></a>
                </ul>
                
            </div>
        
        <SideBar />

        <Outlet />
        <Footer />
        </Fragment>
    )
}

export default Navigation;