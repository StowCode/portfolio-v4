import '../project-tile/project-tile.styles.scss';
import { motion } from 'framer-motion';

// Images
import Arch from '../../static/arch.jpg';
import Sneakers from '../../static/sneakers-screenshot.jpg';
import Bitcoin from '../../static/bitcoin-screenshot.jpg';
import Robot from '../../static/robot-screenshot.jpg';
import StarFlix from '../../static/starflix.png';
import Stowcode from '../../static/stowcode_screenshot.png';
import Brewery from '../../static/brewery-screenshot.jpg';
import Moonager from '../../static/moonager-screenshot.png';

const ProjectTile = () => {
    
    const projects = [
        {
            key: 1,
            name: 'Arch Studios',
            description: 'Built with React and SCSS, this website features a modern and minimalist design that utilizes Leaflet API for an interactive map feature.',
            tech: 'HTML, SCSS, JavaScript, React, React-Router',
            image: Arch,
            url: 'https://arch-studio-riheuypvs-stowcode.vercel.app/'
        },
        {
            key: 2,
            name: 'Brewery App Case Study',
            description: 'This case study takes a deep look at the creation of an app for a local brewery.',
            tech: 'Figma, Google Docs/Slides',
            image: Brewery,
            url: 'https://docs.google.com/presentation/d/1uXKYZdUjVHw3_TfPiYJTKWAHOE7MShLOwfFPmL0Gd6Q/edit?usp=sharing'
        },
        {
            key: 3,
            name: 'Sneakers',
            description: 'This demo e-commerce page allows the user to add items to their cart as well as modify or delete those items.',
            tech: 'HTML, SCSS, JavaScript, React',
            image: Sneakers,
            url: 'https://sneakers-ecommerce-5kymjeht8-stowcode.vercel.app/'
        },
        {
            key: 4,
            name: 'Moonager',
            description: 'Coming Soon - Resource management app built in React using HTML, SCSS, TypeScript, React-Router',
            tech: 'HTML, SCSS, TypeScript, React',
            image: Moonager,
            url: 'https://gilfoyles-bitcoin-alarm-kwk8q7vj2-stowcode.vercel.app/'
        },
        {
            key: 5,
            name: 'Bitcoin Alarm',
            description: 'Built in React and utilizing the CoinGecko API, this app allows the usuer to set custom price alerts for Bitcoin.  Fans of Silicon Valley will enjoy this more than most.',
            tech: 'HTML, SCSS, JavaScript, React',
            image: Bitcoin,
            url: 'https://gilfoyles-bitcoin-alarm-kwk8q7vj2-stowcode.vercel.app/'
        },
        {
            key: 6,
            name: 'Robot Rolodex',
            description: 'This website features a database of users with live search filtering.',
            tech: 'HTML, SCSS, JavaScript, React',
            image: Robot,
            url: 'https://robot-rolodex-2ggfwlli5-stowcode.vercel.app/'
        },
        {
            key: 7,
            name: 'StarFlix',
            description: 'This project, built with vanilla JS, demonstrates a simple landing page for a movie information website.  Complete with interactive voting system. ',
            tech: 'HTML, CSS, JavaScript',
            image: StarFlix,
            url: 'https://starflix-on06lah1q-stowcode.vercel.app/'
        },
        {
            key: 8,
            name: 'Portfolio',
            description: 'The site you are currently using!  React, SCSS, Three.js, Framer Motion.',
            tech: 'HTML, SCSS, React, Three.js, Framer-Motion, React-Router',
            image: Stowcode,
            url: 'https://portfolio-v3-1.vercel.app/'
        }
    ]

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
                            <a href={item.url} target='blank'>
                                <button>View</button>
                            </a>
                            
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ProjectTile;