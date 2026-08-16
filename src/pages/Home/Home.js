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
                <div id='landing-section'>
                    {/*<ScrollVideo src="/intro_v1.mp4" />*/}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="background-video">
                        <source src="darkkk.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className='seperator'>
                    <div className='seperator_illustrations'>
                        <img src='seperator_illustration.PNG' alt='illustration of little stars as a seperator between the studio video and the content' />
                        <img src='seperator_illustration.PNG' alt='illustration of little stars as a seperator between the studio video and the content' />
                        <img src='seperator_illustration.PNG' alt='illustration of little stars as a seperator between the studio video and the content' />
                    </div>
                </div>

                <div className='center-div'>
                    <p id='slogan'>
                        <span id='berlin-based'>
                            {language === "de"
                                ? "Independent 2D Animationsstudio aus Berlin"
                                : "Independent 2D Animation Studio based in Berlin, Germany"}
                        </span>
                    </p>
                </div>

                <div className='mullis-section'>
                    <div>
                        <img src='MulliAnimation1.png' />
                        <img src='MulliAnimation2.png' />
                        <img src='MulliAnimation3.png' />
                    </div>
                    <img src='Mullis.png' className='mullis-one'/>
                    <h2>We are the Mullis</h2>
                    <p>The Mullis aka the Mullemoons are the mascots of Momoon Studio. The</p>
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
                                <a href='/portfolio/marielle-und-die-waldgeister'><img src='Marielle3.jpg' /></a>
                            </div>
                            <p>„Marielle and the Spirits of the Forest“ | 2D Animated Shortfilm | 16:9 | In-Progress</p>
                        </div>
                        <div className='poster poster-charli'>
                            <div>
                                <a href='/portfolio/charli-und-die-mullis'><img src='CharliandMullis.jpg' /></a>
                            </div>
                            <p>„Charli and the Mullis“ | 2D animated shorts | color</p>
                        </div>

                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default Home;
