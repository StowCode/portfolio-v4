import '../Contact/contact.styles.scss';
import AnimatedPage from '../../comps/animated-page.comp';
import SideBar2 from '../../comps/sidebar2/sidebar2.comp';

const Contact = () => {
    return(
        <div className='contact-page page'>
            <AnimatedPage>
                <h4 className='tile-label github-label'>Github</h4>
                <h4 className='tile-label linkedin-label'>LinkedIn</h4>
                <h4 className='tile-label instagram-label'>Instagram</h4>
                <h4 className='tile-label email-label'>Email</h4>
            </AnimatedPage>
            <SideBar2 />
        </div>
    )
}

export default Contact;