import ProjectTile from '../../comps/project-tile/project-tile.comp';
import AnimatedPage from '../../comps/animated-page.comp';
import SideBar from '../../comps/sidebar/sidebar.comp';

import '../Projects/projects.styles.scss';

const Projects = () => {
    return(
        <div>
            <div className='page projects-page'>
                <AnimatedPage>
                    <ProjectTile />
                </AnimatedPage>
            </div>
            <SideBar />
        </div>
    )
}

export default Projects;