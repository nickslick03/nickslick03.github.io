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
    links: {
        href: string;
        text: string;
    }[];
}

const TEMP: Project[][] = [
    [
        {
            imageSrc: 'https://cdn.static-economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png',
            imageAlt: 'Python Code',
            title: 'project',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eveniet, pariatur eligendi cumque consectetur odio saepe ipsa deserunt nobis. Temporibus quo facilis vel quae. Ullam ducimus architecto natus repudiandae dolorum!',
            links: [
                {
                    href: 'https://google.com',
                    text: 'google'
                },
                {
                    href:'./',
                    text: 'this'
                }
            ]
        }
    ],
    [
        {
            imageSrc: 'https://i.pinimg.com/originals/55/93/20/5593201e5ae803d9711638db13ef667a.jpg',
            imageAlt: 'Itzhak Perlman playing the violin',
            title: 'performance',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque eveniet, pariatur eligendi cumque consectetur odio saepe ipsa deserunt nobis. Temporibus quo facilis vel quae. Ullam ducimus architecto natus repudiandae dolorum!',
            links: [
                {       
                    href: 'https://youtube.com',
                    text: 'youtube'
                }
            ]
        }
    ]
];

const Main = () => {

    const [getTab, setTab] = createSignal(Tabs.Projects);

    return (
        <main class="px-4 py-10">
            <div class="font-bold flex flex-col gap-1 mb-10">
                <button onClick={() => setTab(Tabs.Projects)}>
                    Projects
                </button>
                <button onClick={() => setTab(Tabs.Perforamances)}>
                    Performances
                </button> 
            </div>
           <div class="flex flex-col gap-20">
                <For each={[...TEMP[getTab()], ...TEMP[getTab()]]}>
                    {(project) =>
                    <ProjectDisplay project={project} />
                }</For>
           </div>
        </main>
    );
};

export default Main;