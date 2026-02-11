import './Home.css';
import './Home_mobile_landscape.css';
import './Home_desktop.css';
import PageLayout from '../PageLayout';
import { useLanguage } from "../../components/Language";
import { useEffect, useState } from "react";

function useIsDesktop(breakpoint = 568) {
    const [isDesktop, setIsDesktop] = useState(
        window.matchMedia(`(min-width: ${breakpoint}px)`).matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

        const handler = (e) => setIsDesktop(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, [breakpoint]);

    return isDesktop;
}

function Home() {
    const { language, toggleLanguage } = useLanguage();
    const isDesktop = useIsDesktop();

    return (
        <PageLayout navEffect={isDesktop}>
            <div id='home'>
                <h1>THIS IS A BETA WEBSITE, STILL IN WORK.</h1>
                <div id='landing-section'>
                    {/*<ScrollVideo src="/intro_v1.mp4" />*/}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="background-video">
                        <source src="intro_v1.mp4" type="video/mp4" />
                    </video>
                </div>
                <p id='lanugage'
                    onClick={toggleLanguage}
                    style={{ cursor: "pointer" }}
                >
                    {language === "de" ? "EN" : "DE"}
                </p>

                <div className='seperator'></div>

                <div className='center-div'>
                    <p id='slogan'>
                        {language === "de"
                            ? "Wir erzählen Geschichten, die berühren -"
                            : "We tell stories that speak softly -"}<br />
                        {language === "de"
                            ? "für Kinder, für Erwachsene,"
                            : "to children, to grown ups,"}<br />
                        {language === "de"
                            ? "für "
                            : "to  "}
                        <span id='yellow'>
                            {language === "de"
                                ? "jeden, der noch zuhört."
                                : "anyone still listening."}
                        </span><br /><br /><br />
                        <span id='berlin-based'>
                            {language === "de"
                                ? "2D Animationsstudio aus Berlin"
                                : "2D Animation Studio Based in Berlin, Germany"}
                        </span>
                    </p>
                </div>

                <div id='work-section'>
                    <h2>
                        {language === "de"
                            ? "Projekte"
                            : "Projects"}
                    </h2>

                    <div id='poster-section'>
                        <div className='poster'>
                            <div>
                                <a href='/portfolio/marielle-und-die-waldgeister'><img src='marielle.jpg' /></a>
                            </div>
                            <p>Marielle und die Waldgeister (orig.)</p>
                        </div>
                    </div>

                    <h2>
                        {language === "de"
                            ? "In Entwicklung"
                            : "In Development"}
                    </h2>

                    <div id='poster-section'>
                        <div className='poster sneak-peak'>
                            <div>
                                <a><img src='IMG_8378.jpg' /></a>
                            </div>
                            <p>Die Momos (orig.) | 10 x 14 min | 2D animation | color</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default Home;
