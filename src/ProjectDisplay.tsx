import { For } from 'solid-js';
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
                <h2 class='text-2xl font-bold mt-6 mb-4'>
                    {project.title}
                </h2>
                <p class='mb-4'>
                    {project.description}
                </p>
                <For each={project.links}>
                    {(link) =>
                    <a 
                        href={link.href}
                        class='block underline'>
                        {link.text}
                    </a>}
                </For>
            </div>
        </article>
    );
};

export default ProjectDisplay;