const Header = () => {

    const textRefs: HTMLElement[] = [];

    let dividerRef: HTMLDivElement | undefined;

    setTimeout(() => textRefs.forEach(ref => ref.style.transform = 'translateX(0)'), 200);

    return (
        <header class="h-screen p-4 font-bold flex items-end" style="height: 100svh">
            <hgroup>
                <h1 
                    class="text-3xl w-min translate-x-[calc(-100%-1rem)] transition-transform duration-[2000ms]"
                    ref={textRefs[0] as unknown as any}>
                    Nicholas&nbsp;Epps
                    <div 
                        class="w-full h-0.5 bg-gunmetal my-2 md:my-3 origin-right scale-x-0 transition-transform duration-[2000ms]"
                        ref={dividerRef as unknown as any}></div>
                </h1>
                <p 
                    class="text-xl translate-x-[calc(-100%-1rem)] transition-transform duration-[2000ms] delay-500"
                    ref={textRefs[1] as unknown as any}>
                    Computer &amp; Information Science Major
                </p>
                <p 
                    class="text-xl translate-x-[calc(-100%-1rem)] transition-transform duration-[2000ms] delay-1000"
                    ref={textRefs[2] as unknown as any}
                    onTransitionEnd={() => dividerRef?.classList?.add('scale-x-100')}>
                    Music Minor
                </p>
            </hgroup>
        </header>
    );
};

export default Header;