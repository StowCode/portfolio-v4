import ProjectTile from '../../comps/project-tile/project-tile.comp';
import AnimatedPage from '../../comps/animated-page.comp';
import SideBar from '../../comps/sidebar/sidebar.comp';

import '../Projects/projects.styles.scss';

const Projects = () => {
    return(
        <div className='projects-page page'>
        <AnimatedPage>
            <ProjectTile />
        </AnimatedPage>
        <SideBar />
        </div>
    )
}

export default Projects;