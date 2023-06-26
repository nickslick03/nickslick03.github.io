import { createSignal, For } from "solid-js";
import ProjectDisplay from "./ProjectDisplay";
import Project from "./ProjectDisplay";

enum Tabs {
   Projects,
   Perforamances,
}

export type Project = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
}

const TEMP: Project[][] = [
    [
        {
            imageSrc: 'https://cdn.static-economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png',
            imageAlt: 'Python Code',
            title: 'project',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eveniet, pariatur eligendi cumque consectetur odio saepe ipsa deserunt nobis. Temporibus quo facilis vel quae. Ullam ducimus architecto natus repudiandae dolorum!',
            linkHref: 'https://google.com',
            linkText: 'google'
        }
    ],
    [
        {
            imageSrc: 'https://i.pinimg.com/originals/55/93/20/5593201e5ae803d9711638db13ef667a.jpg',
            imageAlt: 'Itzhak Perlman playing the violin',
            title: 'performance',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eveniet, pariatur eligendi cumque consectetur odio saepe ipsa deserunt nobis. Temporibus quo facilis vel quae. Ullam ducimus architecto natus repudiandae dolorum!',
            linkHref: 'https://youtube.com',
            linkText: 'youtube'
        }
    ]
];

const Main = () => {

    const [getTab, setTab] = createSignal(Tabs.Projects);

    return (
        <main>
            <div>
                <button onClick={() => setTab(Tabs.Projects)}>
                    Projects
                </button>
                <button onClick={() => setTab(Tabs.Perforamances)}>
                    Performances
                </button> 
            </div>
           <div>
                <For each={TEMP[getTab()]}>{(project) =>
                    <ProjectDisplay project={project} />
                }</For>
           </div>
        </main>
    );
};

export default Main;