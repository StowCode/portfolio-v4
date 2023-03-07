import { motion } from 'framer-motion';

import '../About/about.styles.scss';
import Headshot from '../../static/headshot.jpg';

export default function About() {
    return(
        <div id='aboutme'>
            
            <div className='bio-container'>

                <img className='headshot' src={Headshot}/>

                <p id='bio' className='bio'>Hey, I'm Mitch.
                    <br></br>
                    <br></br>
                    I'm a Frontend Developer skilled in HTML, CSS, JS, and React, with a special interest in animation and Three.js. My background in visual design and public education has given me years of experience delivering information effectively, and now I use those skills to create efficient and intuitive website architecture
                    <br></br>
                    <br></br>
                    I know that I’m happiest when I am creating and building, and I’m excited to bring my skills, ideas, and energy, to your team.
                    In my time as a developer, I have designed, developed, and launched highly responsive and interactive websites. With the use of browser based 3D rendering, I have crafted immersive and addicting web experiences that create public engagement with products and company culture. Additionally, I pride myself on being a team player, and adapting to overcome challenges.
                </p>
            </div>
                
                <h2>Skills</h2>
                <div className='skills'>
{/*                     <motion.div className="skillbutton" id="html_btn"
                        whileHover={{
                            scale: 1.2
                        }}
                    >
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
                    </motion.div> */}
                    <div className="skillbutton" id="css_btn">
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
                    </div>
                    <div className="skillbutton" id="javascript_btn">
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                    </div>
                    <div className="skillbutton" id="react_btn">
                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                    </div>
                    <div className="skillbutton" id="threejs_btn">
                        <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" />
                    </div>
                    <div className="skillbutton" id="figma_btn">
                        <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
                    </div>

                </div>

        </div>
    )
}
