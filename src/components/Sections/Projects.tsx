import { For } from 'solid-js';
import type { Project } from '../Main';
import { PROJECTS } from '../../JSON/projects';

const ProjectDisplay = ({
    project
}: {
    project: Project;
}) => {

    return (
        <article class='lg:flex'>
            <div class='lg:w-1/2 lg:shrink-0 lg:flex lg:items-start lg:justify-center'>
                <img 
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    loading='lazy'
                    class="block shadow-lg shadow-[rgba(0,0,0,0.4)] w-full" />
            </div>
            <div class='lg:mr-8 lg:-order-1'>
                <h2 class='text-2xl font-bold mt-8 mb-4 lg:mt-0'>
                    {project.title}
                </h2>
                <p class='mb-4'>
                    {project.description}
                </p>
                <For each={project.links}>
                    {(link) =>
                        <a 
                            href={link.href}
                            class='block underline hover:text-tiffanyBlue lg:inline lg:mr-4'>
                            {link.text}
                        </a>}
                </For>
            </div>
        </article>
    );
};

const Projects = () => {

    return (
        <div class="flex flex-col gap-16 lg:gap-32">
            <For each={PROJECTS}>
                {(project) =>
                <ProjectDisplay project={project} />
            }</For>
        </div>
    );
}

export default Projects;