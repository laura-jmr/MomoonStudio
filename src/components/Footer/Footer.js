import './Footer.css';
import './Footer_mobile_landscape.css';
import './Footer_tablet_landscape.css';
import './Footer_desktop.css';
import { useLanguage } from "../../components/Language";

function Footer() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <footer>
            <div className='footer-socials'>
                <ul>
                    <li><a href='https://vimeo.com/momoonstudio' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-vimeo"></i></a></li>
                    <li><a href='https://www.instagram.com/momoonstudio/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='https://youtube.com/@momoonstudio' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href='https://tiktok.com/@momoonstudio' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i></a></li>
                </ul>
            </div>

            <div id='footer-links'>
                <p>© Momoon Studio 2026 | <a href='/imprint'>
                    {language === "de"
                        ? "Impressum"
                        : "Imprint"}
                </a> | <a href='/termsconditions'>
                        {language === "de"
                            ? "AGB"
                            : "Terms and Conditions"}
                    </a></p>
            </div>
        </footer>
    );
}

export default Footer;