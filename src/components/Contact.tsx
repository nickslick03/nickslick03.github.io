import { For } from "solid-js";
import Footer from "./Footer";

const CONTACT_LIST = [
    {
        href: "mailto:ne1180@messiah.edu",
        src: "https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png",
        alt: "mail"
    },
    {
        href: "https://github.com/nickslick03",
        src: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
        alt: "Github"
    },
    {
        href: "https://www.youtube.com/channel/UC1NJcOgEFw5GwjjMpVl9biA",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
        alt: "Youtube"
    }
];

const Contact = () => {

    return (
        <div class="h-screen flex flex-col">
            <section class="flex-1 flex flex-col justify-center items-center gap-10">
                <h2 class="text-2xl font-bold">
                    Get in Touch.
                </h2>
                <ul class="flex gap-8 items-center">
                    <For each={CONTACT_LIST}>
                        {(contact) =>
                        <li>
                            <a href={contact.href}>
                                <img
                                    src={contact.src}
                                    alt={contact.alt}
                                    class="w-20 transition-transform duration-200 hover:scale-110" />
                            </a>
                        </li>}
                    </For>
                </ul>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;