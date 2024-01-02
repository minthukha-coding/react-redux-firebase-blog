import React from "react";
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projets}) => {
    return(
        <div className="project-list section">
            {projets && projets.map(projet => {
                return(
                    <ProjectSummary project={projet} key={projet.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList
