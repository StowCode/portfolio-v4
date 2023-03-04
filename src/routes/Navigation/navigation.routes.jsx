import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../Navigation/navigation.styles.scss';

const Navigation = () => {
    return(
        <Fragment>

            <div className='navbar'>
                <Link to='/'>
                    <img className='nav-logo' src='https://ucarecdn.com/aac08051-ae26-4543-b75b-857732aaeb05/-/preview/-/quality/smart/'/>
                </Link>
                <ul className='navlinks'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about'>About</Link>
                    <Link className='link' to='/projects'>Projects</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                    <span className='resume-btn link'>Resum&eacute;</span>
                </ul>
                
            </div>

        <Outlet />
        </Fragment>
    )
}

export default Navigation;