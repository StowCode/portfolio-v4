import ProjectTile from '../../comps/project-tile/project-tile.comp';
import AnimatedPage from '../../comps/animated-page.comp';

import '../Projects/projects.styles.scss';

const Projects = () => {
    return(
        <div className='projects-page page'>
        <AnimatedPage>
            <h1>HOVER TO LEARN MORE...</h1>
            <ProjectTile />
        </AnimatedPage>
        </div>
    )
}

export default Projects;