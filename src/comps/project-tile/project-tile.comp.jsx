import '../project-tile/project-tile.styles.scss';
import { motion } from 'framer-motion';

const ProjectTile = () => {
    const projects = [
        {
            key: 1,
            name: 'project 1'
        },
        {
            key: 2,
            name: 'project 2'
        },
        {
            key: 3,
            name: 'project 3'
        },
        {
            key: 4,
            name: 'project 4'
        }
    ]
    

    return(
        <div className='project-tiles'>
            { projects.map(item => {
                return(
                    <motion.div 
                        className='motion-tile'
                        layout
                        initial={{
                            width: '32vw',
                            height: '32vw'
                        }}
                        whileHover={{
                            width: '35vw',
                            height: '35vw',
                            zIndex: '2',
                            justifySelf: 'center'
                        }}
                        >
                        <h1>{item.name}</h1>
                    </motion.div>
                )
            })}

        </div>
    )
}

export default ProjectTile;