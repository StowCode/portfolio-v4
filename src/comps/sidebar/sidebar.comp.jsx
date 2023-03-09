// Style
import './sidebar.styles.scss';

// Images
import { ReactComponent as Github } from '../../static/svg/github.svg';
import { ReactComponent as LinkedIn } from '../../static/svg/linkedin.svg';
import { ReactComponent as Instagram } from '../../static/svg/instagram.svg';
import { ReactComponent as Email } from '../../static/svg/mail.svg';

const SideBar = () =>  {
    return(
        <div className='sidebar'>
             <div className='icons'>
                <a href="https://github.com/StowCode" target="blank">
                    <Github className='icon'/>
                </a>

                <a href='https://www.linkedin.com/in/mitchstowman/' target='blank'>
                    <LinkedIn className='icon'/>
                </a>
                
                <a href='https://www.instagram.com/mitch.stowman/' target='blank'>
                    <Instagram className='icon'/>
                </a>
                
                <a href="mailto:mitchellstowman@gmail.com">
                    <Email className='icon'/>
                </a>

                <div className='line'></div>
            </div>
        </div>
    )
}

export default SideBar;