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
        <div>
            { projects.map(item => {
                return(
                    <motion.div 
                        className='motion-tile'
                        layout
                        initial={{
                            width: '30vw',
                            height: '30vw'
                        }}
                        whileHover={{
                            width: '80vw',
                            height: '80vh',
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