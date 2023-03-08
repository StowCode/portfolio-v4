import '../Contact/contact.styles.scss';
import AnimatedPage from '../../comps/animated-page.comp';
import SideBar from '../../comps/sidebar/sidebar.comp';

const Contact = () => {
    return(
        <div className='contact-page page'>
            <AnimatedPage>
                <h1>Get in Touch</h1>
            </AnimatedPage>
            <SideBar />
        </div>
    )
}

export default Contact;