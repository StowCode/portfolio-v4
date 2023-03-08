import '../Contact/contact.styles.scss';
import AnimatedPage from '../../comps/animated-page.comp';
import SideBar2 from '../../comps/sidebar2/sidebar2.comp';
import { motion } from 'framer-motion';

const Contact = () => {
    return(
        <div className='contact-page page'>
            <AnimatedPage>
                <motion.h4 
                    className='tile-label github-label'
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1}}
                >Github</motion.h4>

                <motion.h4 
                    className='tile-label linkedin-label'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ delay: 1.5}}
                >LinkedIn</motion.h4>

                <motion.h4
                    className='tile-label instagram-label'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ delay: 2}}
                >Instagram</motion.h4>

                <motion.h4
                    className='tile-label email-label'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ delay: 2.5}}
                >Email</motion.h4>

            </AnimatedPage>
            <SideBar2 />
        </div>
    )
}

export default Contact;