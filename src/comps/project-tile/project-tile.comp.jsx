import '../project-tile/project-tile.styles.scss';
import { motion } from 'framer-motion';

// Images
import Arch from '../../static/arch.jpg';
import Sneakers from '../../static/sneakers-screenshot.jpg';
import Bitcoin from '../../static/bitcoin-screenshot.jpg';
// ROBOT?
import StarFlix from '../../static/starflix.png';
import Stowcode from '../../static/stowcode_screenshot.png';

const ProjectTile = () => {
    
    const projects = [
        {
            key: 1,
            name: 'Arch Studios',
            description: 'Built with React and SCSS, this website features a modern and minimalist design.',
            tech: 'HTML, SCSS, JavaScript, React, React-Router',
            image: Arch
        },
        {
            key: 2,
            name: 'Sneakers',
            description: 'This demo e-commerce page allows the user to add items to their cart as well as modify or delete those items.',
            tech: 'HTML, SCSS, JavaScript, React',
            image: Sneakers
        },
        {
            key: 3,
            name: 'Bitcoin Alarm',
            description: 'Built in React and utilizing the CoinGecko API, this app allows the usuer to set custom price alerts for Bitcoin.',
            tech: 'HTML, SCSS, JavaScript, React',
            image: Bitcoin
        },
        {
            key: 4,
            name: 'Robot Rolodex',
            description: 'This website features a databse of users with live search filtering.',
            tech: 'HTML, SCSS, JavaScript, React',
            image: ''
        },
        {
            key: 5,
            name: 'StarFlix',
            description: '',
            tech: 'HTML, CSS, JavaScript',
            image: StarFlix
        },
        {
            key: 6,
            name: 'Portfolio',
            description: 'The site you are currently using!  React, SCSS, Three.js, Framer Motion.',
            tech: 'HTML, SCSS, React, Three.js, Framer-Motion, React-Router',
            image: Stowcode
        }
    ]
    
    // IDEA:
    // Can I use state to modify position/layout?  Still
    // like the idea of expanding the tile to a full page

    // Set background image from data within the react component?

    return(
        <div className='project-tiles'>
            { projects.map(item => {
                return(
                    <div
                        key={item.key}
                        className='motion-tile'
                        style={{backgroundImage: `url(${item.image}`}}
                        >
                        <div className='content-container'>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <span className='filter'></span>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProjectTile;