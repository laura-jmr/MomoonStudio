import PageLayout from '../PageLayout';
import './NotFound.css';
import { useLanguage } from "../../components/Language";

function NotFound() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='not-found'>
                <div id='content'>
                    <h1>
                        {language === "de"
                            ? "Oh oh, du hast dich verlaufen"
                            : "Oh oh you're lost"}
                    </h1><br /> <br />
                    <a href="/">
                        {language === "de"
                            ? "Gehe zurück zur Startseite"
                            : "Get back to the homepage"}
                    </a>
                </div>
            </div>
        </PageLayout>
    );
}

export default NotFound;
