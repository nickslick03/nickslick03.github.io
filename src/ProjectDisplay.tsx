import type { Project } from './Main';

const ProjectDisplay = ({
    project
}: {
    project: Project;
}) => {

    return (
        <article>
            <div>
                <img 
                    src={project.imageSrc} 
                    alt={project.imageAlt} />
            </div>
            <div>
                <h3>
                    {project.title}
                </h3>
                <p>
                    {project.description}
                </p>
                <a href={project.linkHref}>
                    {project.linkText}
                </a>
            </div>
        </article>
    );
};

export default ProjectDisplay;