import { createSignal, For } from 'solid-js';
import type { Project } from './Main';
import eleanorMund from './images/eleanorMund.png'

const ProjectDisplay = ({
    project
}: {
    project: Project;
}) => {

    console.log(eleanorMund)

    return (
        <article>
            <div>
                <img 
                    src={eleanorMund}
                    alt={project.imageAlt}
                    class="shadow-lg shadow-[rgba(0,0,0,0.4)]" />
            </div>
            <div>
                <h2 class='text-2xl font-bold mt-6 mb-2'>
                    {project.title}
                </h2>
                <p class='mb-2'>
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

export default ProjectDisplay;