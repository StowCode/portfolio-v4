import { motion } from 'framer-motion';

// Styling and Images
import '../About/about.styles.scss';
// Comps
import SkillBadge from '../../comps/skill-badge/badge.comp';
import AnimatedPage from '../../comps/animated-page.comp';

export default function About() {
    return(
        
        <div className='aboutme page'>
            <AnimatedPage>
            <div className='bio-container'>

                <img className='headshot' src="https://live.staticflickr.com/65535/52736232191_ef87166376.jpg"/>

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

{/* SKILLS */}
                <h2>Skills</h2>
                <div className='skills'>
                    <motion.div
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#e34f2680', '#e34f26', '#e34f2680' ]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/html5-%23E34F2600.svg?style=for-the-badge&logo=html5&logoColor=white" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#1572b680', '#1572b6', '#1572b680' ]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/css3-%231572B600.svg?style=for-the-badge&logo=css3&logoColor=white" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#32333080', '#323330', '#32333080' ]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/javascript-%2332333000.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#20232a80', '#20232a', '#20232a80' ]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/react-%2320232a00.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#55555580', '#555555', '#55555580' ]
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}    
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/threejs-%2355555500.svg?style=for-the-badge&logo=three.js&logoColor=white" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#f24e1e80', '#f24e1e', '#f24e1e80' ],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/figma-%23F24E1E00.svg?style=for-the-badge&logo=figma&logoColor=white" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#1572b680', '#1572b6', '#1572b680' ],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/Framer-%23F24E1E00.svg?style=for-the-badge&logo=framer&logoColor=black" 
                        />
                    </motion.div>

                    {/* NEEDS STYLED */}
                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#1572b680', '#1572b6', '#1572b680' ],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#ff69b480', '#ff69b4', '#ff69b480' ],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/SASS-%23ff69b400.svg?style=for-the-badge&logo=SASS&logoColor=white" 
                        />
                    </motion.div>

                    <motion.div 
                        className='badge-flex'
                        animate={{
                            // scale: [1, 1.1, 1],
                            background: ['#47013780', '#470137', '#47013780' ],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <motion.img whileHover={{scale: 1.2, x: [5, -5, 3, -3, 0]}} className="skillbutton" 
                        src="https://img.shields.io/badge/Adobe%20XD-%2347013700.svg?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" 
                        />
                    </motion.div>
                    
                    
                </div>
            </AnimatedPage>
        </div>    
        
    )
}

/* BADGES TO ADD

Adobe XD


Bootstrap
https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white

Sass





*/


