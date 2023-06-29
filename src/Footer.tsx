const Footer = () => {
    
    const year = new Date().getFullYear();

    return (
        <footer class="bg-gray-300 text-center">
            <div class="my-6">
                © {year} Nicholas Epps
            </div>
        </footer>
    );
};

export default Footer;