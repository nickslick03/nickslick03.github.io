import { createSignal, For } from "solid-js";
import ProjectDisplay from "./ProjectDisplay";
import Project from "./ProjectDisplay";
import { PROJECTS } from "./JSON/projects";

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

const Main = () => {

    const [getTab, setTab] = createSignal(Tabs.Projects);

    return (
        <main class="px-4 py-10 bg-slate-700 bg-opacity-40 shadow-content">
            <div class="text-2xl font-bold flex flex-col items-center gap-4 mb-10">
                <For each={["Projects", "Resume"]}>
                    {(tab, i) =>
                    <button
                        class="sm:hover:text-tiffanyBlue sm:[&:hover>div]:bg-tiffanyBlue" 
                        onClick={() => setTab(i())}>
                        {tab}
                        <div 
                            class="w-full h-0.5 bg-gunmetal -my-0.5 
                            scale-x-0 origin-left transition-transform duration-1000"
                            style={{
                                'transform': getTab() === i() ? 'scaleX(1)' : 'scaleX(0)',
                            }}></div>
                    </button>}
                </For>
            </div>
           <div class="flex flex-col gap-24">
                <For each={PROJECTS}>
                    {(project) =>
                    <ProjectDisplay project={project} />
                }</For>
           </div>
        </main>
    );
};

export default Main;