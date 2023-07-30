import { For, Show, onMount } from "solid-js";
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Resume from "./Sections/Resume";
import Dropdown from "./Dropdown";
import Contact from "./Contact";

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
            id: 'about',
            hasTitle: true,
            background: true,
            Element: About
        },
        {
            id: 'projects',
            hasTitle: true,
            background: false,
            Element: Projects
        },
        {
            id: 'resume',
            hasTitle: true,
            background: true,
            Element: Resume
        },
        {
            id: 'contact',
            hasTitle: false,
            background: false,
            Element: Contact
        }
    ];

    const observer = () => new IntersectionObserver(
        (entry) => {
            if (!entry[0].isIntersecting) return;
            const currIndex = sectionElements.indexOf(entry[0].target as HTMLElement);
            if (prevIndex === currIndex || !underlineElements[currIndex]) return;
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
        <main class="flex flex-col">
            <Dropdown elementIDs={sections.map(({id}) => id)} />
            <For each={sections}>
                {({id, hasTitle, background, Element}, i) =>
                <section 
                    class={(hasTitle ? 'px-4 py-8 ' : '') + 
                    (background ? "bg-slate-700 bg-opacity-40 shadow-section" : '')}
                    id={id}
                    ref={sectionElements[i()]}>
                    <Show when={hasTitle}>
                        <h2 class="w-min text-2xl text-gunmetal font-bold pb-8 first-letter:capitalize">
                            {id}
                            <div 
                                class="w-full h-0.5 bg-gunmetal origin-left transition-transform duration-[2000ms]"
                                style="transform: scaleX(0)"
                                ref={underlineElements[i()]}>
                            </div>
                        </h2>
                    </Show> 
                    <Element />
                </section>}
            </For>
        </main>
    );
};

export default Main;