import { For } from 'solid-js';
import type { Project } from '../Main';
import { PROJECTS } from '../../JSON/projects';

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
                    alt={project.imageAlt}
                    loading='lazy'
                    class="shadow-lg shadow-[rgba(0,0,0,0.4)]" />
            </div>
            <div>
                <h2 class='text-2xl font-bold mt-8 mb-4'>
                    {project.title}
                </h2>
                <p class='mb-4'>
                    {project.description}
                </p>
                <For each={project.links}>
                    {(link) =>
                    <div>
                        <a 
                            href={link.href}
                            class='underline hover:text-tiffanyBlue'>
                            {link.text}
                        </a>    
                    </div>}
                </For>
            </div>
        </article>
    );
};

const Projects = () => {

    return (
        <div class="flex flex-col gap-16">
            <For each={PROJECTS}>
                {(project) =>
                <ProjectDisplay project={project} />
            }</For>
        </div>
    );
}

export default Projects;