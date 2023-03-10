import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../../comps/footer/footer.comp';

import '../Navigation/navigation.styles.scss';
import SideBar from '../../comps/sidebar/sidebar.comp';

const Navigation = () => {
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
                    <Link className='link' to='/contact'>Contact</Link>
                    <a href='file' download><span className='resume-btn link'>Resum&eacute;</span></a>
                </ul>
                
            </div>
        
        <SideBar />
        <Outlet />
        <Footer />
        </Fragment>
    )
}

export default Navigation;