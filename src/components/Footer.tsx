const Footer = () => {
    
    const year = new Date().getFullYear();

    return (
        <footer class="bg-slate-700 bg-opacity-40 shadow-inset text-center">
            <div class="py-6">
                © {year} Nicholas Epps
            </div>
        </footer>
    );
};

export default Footer;