//
import { motion } from 'framer-motion';

// Style
import './sidebar.styles.scss';

// Images
import { ReactComponent as Github } from '../../static/svg/github.svg';
import { ReactComponent as LinkedIn } from '../../static/svg/linkedin.svg';
import { ReactComponent as Instagram } from '../../static/svg/instagram.svg';
import { ReactComponent as Email } from '../../static/svg/mail.svg';

const SideBar = (props) =>  {

    return(
        <motion.div
            layout
            className='sidebar'
            data-ison={props.isOn}
        >
             <motion.div className='icons'>

                <motion.div className='icon-container'>
                    <a href="https://github.com/StowCode" target="blank">
                        <Github className='icon'/>
                    </a>
                </motion.div>

                <motion.div className='icon-container'>
                    <a href='https://www.linkedin.com/in/mitchstowman/' target='blank'>
                        <LinkedIn className='icon'/>
                    </a>
                </motion.div>

                <motion.div className='icon-container'>
                    <a href='https://www.instagram.com/mitch.stowman/' target='blank'>
                        <Instagram className='icon'/>
                    </a>
                </motion.div>

                <motion.div className='icon-container'>
                    <a href="mailto:mitchellstowman@gmail.com">
                        <Email className='icon'/>
                    </a>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default SideBar;
