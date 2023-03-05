// Comps
import SideBar from '../../comps/sidebar/sidebar.comp.';

// Style
import '../Home/home.styles.scss';

const Home = () => {
    return(
        <div className='page home-page'>

            <div className='flex-container'>
                <div className='hero-text'>
                    <h3>Welcome to the portfolio of</h3>
                    <h1>Mitchell Stowman</h1>
                    <h3>Frontend Developer</h3>
                </div>

                <div id='canvas'>

                </div>
            </div>

            <SideBar />
        </div>
    )
}

export default Home;