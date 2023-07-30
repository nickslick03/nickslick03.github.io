import { For, createEffect, createSignal } from "solid-js";

const Dropdown = (props: {
    elementIDs: string[];
}) => {

    const [isVisible, setIsVisible] = createSignal(false);
    const [isSelected, setIsSelected] = createSignal(false);

    document.addEventListener('scroll', () => setIsVisible(true), { once: true });

    const closeDropwdown = () => {
        setIsSelected(false);
        document.removeEventListener('scroll', closeDropwdown);
    };
   
    createEffect(() => {
        if (isSelected()) {
            document.addEventListener('scroll', closeDropwdown);
        } 
    });

    const scroll = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
        setIsSelected(false);
    }

    return (
        <div 
            class="fixed top-0 w-full pt-4 
            flex flex-col items-center">
            <button
                class="w-6 h-6 aspect-square opacity-0 transition-opacity duration-1000"
                style={"filter: drop-shadow(2px 4px 6px black); " + (isVisible() && !isSelected() ? "opacity: 1" : "")}
                onclick={() => setIsSelected(true)}>
                <svg width={24} height={24}>
                    <For each={[0, 11, 22]}>
                        {(y) => <rect width="100%" height={2} y={y} />}
                    </For>
                </svg>
            </button>
            <nav 
                class="absolute top-0 w-full pt-4 pb-12 
                bg-gradient-to-b from-gunmetal to-transparent 
                transition-transform duration-1000"
                style={{
                    "transform": `translateY(${isSelected() ? '0' : '-100'}%)`
                }}>
                <ul class="text-tiffanyBlue flex flex-col items-center gap-8 text-xl">
                    <For each={props.elementIDs}>
                        {(elementID) => 
                        <li
                            class="select-none cursor-pointer"
                            onclick={() => scroll(elementID)}>
                            <button tabIndex={isSelected() ? 0 : -1}>
                                {elementID}
                            </button>
                        </li>}
                    </For>
                    <li 
                        class="w-7 h-7
                        bg-slate-700 bg-opacity-40 
                        rounded-full select-none
                        flex justify-center items-center cursor-pointer"
                        onclick={() => setIsSelected(false)}>
                        <button 
                            tabIndex={isSelected() ? 0 : -1}>
                            <svg width={12} height={12}>
                                <line x1={0} y1={0} x2={12} y2={12} stroke="#ADEBE9" stroke-width={2}/>
                                <line x1={0} y1={12} x2={12} y2={0} stroke="#ADEBE9" stroke-width={2}/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dropdown;
