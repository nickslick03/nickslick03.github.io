const Footer = () => {
    
    const year = new Date().getFullYear();

    return (
        <footer class="bg-slate-700 bg-opacity-40 shadow-insetContent text-center">
            <div class="my-6">
                © {year} Nicholas Epps
            </div>
        </footer>
    );
};

export default Footer;