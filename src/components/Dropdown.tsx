import { For, createSignal } from "solid-js";

const Dropdown = (props: {
    elementIDs: string[];
}) => {

    const [isVisible, setIsVisible] = createSignal(false);
    const [isSelected, setIsSelected] = createSignal(false);

    document.addEventListener('scroll', () => setIsVisible(true), {once: true});

    document.addEventListener('scroll', () => {
        if (!isSelected()) return;
        setIsSelected(false);
    })

    const scroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        setIsSelected(false);
    }

    return (
        <div 
            class="fixed top-0 w-screen pt-4 
            flex flex-col items-center 
            opacity-0 transition-opacity duration-1000"
            style={isVisible() ? 'opacity: 1' : ''}>
            <button onclick={() => setIsSelected(true)}>
                <div 
                    class="w-6 aspect-square flex flex-col justify-around transition-all duration-1000"
                    style={{
                        "filter": "drop-shadow(0 0 8px rgba(0,0,0,.8)",
                        "opacity": isSelected() ? "0" : "1"}}>
                    <For each={Array(3)}>
                        {() =>
                        <div class="h-[2px] w-full bg-gunmetal">
                        </div>}
                    </For>
                </div>
            </button>
            <nav 
                class="absolute top-0 w-full pt-4 pb-12 
                bg-gradient-to-b from-gunmetal to-transparent 
                transition-transform duration-1000"
                style={{
                    "transform": `translateY(${isSelected() ? '0' : '-100'}%)`
                }}>
                <ul class="text-tiffanyBlue text-center text-xl">
                    <For each={props.elementIDs}>
                        {(elementID) => 
                        <li
                            class="mb-4 shadow-sm select-none cursor-pointer"
                            onclick={() => scroll(elementID)}>
                            {elementID}
                        </li>}
                    </For>
                    <li 
                        class="w-6 text-base aspect-square mx-auto 
                        bg-slate-700 bg-opacity-40 
                        rounded-full shadow shadow-[rgba(0,0,0,.4)] select-none
                        flex justify-center items-center cursor-pointer"
                        onclick={() => setIsSelected(false)}>
                        ⨉
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dropdown;