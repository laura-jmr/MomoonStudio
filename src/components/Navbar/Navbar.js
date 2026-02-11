import { useState, useEffect } from 'react';
import './Navbar.css';
import './Navbar_mobile_landscape.css';
import './Navbar_tablet.css';
import './Navbar_tablet_landscape.css';
import './Navbar_desktop.css';
import { useLanguage } from "../../components/Language";

function useScrollProgress(enabled) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!enabled) return;

        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [enabled]);

    return progress;
}

function Navbar({ navEffect = false }) {
    const { language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const scrollProgress = useScrollProgress(navEffect);
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        if (!navEffect) return;

        if (window.scrollY !== 0) {
            setShowIntro(false);
            return;
        }

        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [navEffect]);

    const isVisible =
        (!navEffect) ||
        showIntro ||
        (navEffect && scrollProgress > 0.2);

    function toggleMenuOpen() {
        setMenuOpen(prev => !prev);
    }

    return (

        <nav className={`navbar ${navEffect ? (isVisible ? "visible" : "") : "no-effect"}`}>
            <div id='nav-full-display'>
                <ul>
                    <li><a href='/about'>
                        {language === "de"
                        ? "Über uns"
                        : "About"}
                    </a></li>
                    <a id='logo' href='/'><img src='/logo_transparent.PNG' alt='Logo' /></a>
                    <li><a href='/reachout'>
                        {language === "de"
                        ? "Kontakt"
                        : "Contact"}
                        </a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;