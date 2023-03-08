import '../Contact/contact.styles.scss';
import AnimatedPage from '../../comps/animated-page.comp';
import SideBar2 from '../../comps/sidebar2/sidebar2.comp';

const Contact = () => {
    return(
        <div className='contact-page page'>
            <AnimatedPage>
                <h1>Get in Touch</h1>
            </AnimatedPage>
            <SideBar2 />
        </div>
    )
}

export default Contact;