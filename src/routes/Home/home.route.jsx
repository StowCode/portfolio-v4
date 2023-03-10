// Comps
import AnimatedPage from '../../comps/animated-page.comp';
import Scene from '../../comps/threejs/test.comp';

// Style
import '../Home/home.styles.scss';

const Home = () => {
    return(
        <div className='page home-page'>
            <AnimatedPage>
            <div className='flex-container'>
                <div className='hero-text'>
                    <h3>Welcome to the portfolio of</h3>
                    <h1>Mitchell Stowman</h1>
                    <h3>Frontend Developer</h3>
                </div>

                <div className='canvas-filter'></div>
                <Scene />
            </div>
            </AnimatedPage>
        </div>
    )
}

export default Home;