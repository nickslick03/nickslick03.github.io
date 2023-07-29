import { For, onMount } from "solid-js";
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Resume from "./Sections/Resume";
import Dropdown from "./Dropdown";

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

const Main = () => {

    const sections = [
        {
            title: 'About',
            Element: About
        },
        {
            title: 'Projects',
            Element: Projects
        },
        {
            title: 'Resume',
            Element: Resume
        }
    ];

    const observer = () => new IntersectionObserver(
    (entry) => {
        if (!entry[0].isIntersecting) return;
        const currIndex = sectionElements.indexOf(entry[0].target as HTMLElement);
        if (prevIndex === currIndex) return;
        if (prevIndex !== undefined) 
            underlineElements[prevIndex].style.transform = 'scaleX(0)';
        underlineElements[currIndex].style.transform = 'scaleX(1)';
        prevIndex = currIndex;

    }, 
    {
        rootMargin: '-15% 0px -80% 0px'
    });

    const sectionElements: HTMLElement[] = [];
    const underlineElements: HTMLDivElement[] = [];
    let prevIndex: number;

    onMount(() => {
        sectionElements.forEach(element => {
            observer().observe(element);
        });
    });

    return (
        <main class="flex flex-col gap-6">
            <For each={sections}>
                {({title, Element}, i) =>
                <section 
                    class={'px-4 py-8 ' + (i() % 2 === 0 ? "bg-slate-700 bg-opacity-40 shadow-section" : '')}
                    id={title}
                    ref={sectionElements[i()]}>
                    <h2 class="w-min text-2xl text-gunmetal text-center font-bold pb-8">
                        {title}
                        <div 
                            class="w-full h-0.5 bg-gunmetal origin-left transition-transform duration-[2000ms]"
                            style="transform: scaleX(0)"
                            ref={underlineElements[i()]}>
                        </div>
                    </h2>
                    <Element />
                </section>}
            </For>
            <Dropdown elementIDs={sections.map(({title}) => title)} />
        </main>
    );
};

export default Main;