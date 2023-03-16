import '../footer/footer.styles.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
        };

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return(
        <div className='footer'>
            <h6>&copy; StowCode 2023</h6>
            
            {/* <div className='switch-container'>
                <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
                    <motion.div className="handle" layout transition={spring} />
                </div>

                {
                    isOn ? <h6>Light</h6> : <h6>Dark</h6>
                }
            </div> */}

        </div>
    )
}

export default Footer;