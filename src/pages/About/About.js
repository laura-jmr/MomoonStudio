import './About.css';
import './About_desktop.css';
import PageLayout from '../PageLayout';
import { useLanguage } from "../../components/Language";

function About() {
    const work_banner_items = [
        "character design",
        "storyboarding",
        "rough animation",
        "clean animation",
        "background art",
        "final production",
    ];
    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='about'>
                <h1>
                    {language === "de"
                        ? "Über das Studio"
                        : "About the Studio"}
                </h1>
                <h2>
                    {language === "de"
                        ? "Unsere Vision"
                        : "Our Vision"}
                </h2>
                <p>
                    {language === "de"
                        ? "Wir sind ein unabhängiges Animationsstudio."
                        : "We are an independet animation studio."}
                    <br />
                    {language === "de"
                        ? "Unsere Arbeit stammt aus Liebe für traditionelle 2D Animationen und dem Gefühl von "
                        : "Our work is rooted in a love for traditional 2D animation and the quiet sense of "}
                    <span>
                        {language === "de"
                            ? "Nostalgie"
                            : "nostalgia"}
                    </span>
                    {language === "de"
                        ? ", die darin liegt."
                        : " it carries."}
                </p>
                <br />
                <p>
                    {language === "de"
                        ? "Für uns ist Animation eine einzigartige Kunstform. Sie kombiniert Zeichnung, Bewegung, Sound und Zeit zu einer emotionalen Experience, wie es kein anderes Medium kann. Mit der Ungebundenheit zu physischen Realität kann Animation abstrakte Geschichten erzählen, dort, wo Fantasie Bedeutung schafft, wie es Realismus niemald könnte."
                        : "To us, animation is a unique art form. It brings together drawing, movement, sound and time into an emotional experience like no other medium can. With it's boundlessness to physical reality, animation allows stories to exist in a more abstract space, one, where imagination shapes meaning more than realism ever could."}
                </p>
                <br />
                <p>
                    {language === "de"
                        ? "Wir glauben, dass es in der Kunst vor allem um emotionale Berührung geht. Künstler:innen bieten Fragmente ihrer eigenen Erfahrungen, Emotionen und Sichtweisen auf die Welt an, die auf ihre eigene Weise wahrgenommen werden können. Man kann versuchen, überzeugende Emotionen zu erzeugen, aber Gefühle sind niemals garantiert. Jeder betrachtet die Welt durch seine persönliche Brille."
                        : "We believe that art is, above all, about emotional touch. Artists offer fragments of their own experiences, emotions and ways of seeing the world to be perceived in their own way. Convincing emotions can be tried to achieve, but feelings are nothing guaranteed. Everyone views the world through their personal lense."}
                </p>
                <br />
                <p>
                    {language === "de"
                        ? "Selbst wenn wir Geschichten mit einer klaren Absicht erzählen, kommt irgendwann der Moment, in dem sie ein Eigenleben entwickeln, wie ein Schmetterling, der diejenigen erreicht, die ihre Hände ausstrecken, um ihn zu empfangen. Deshalb schaffen wir Geschichten für alle – die noch zuhören."
                        : "Even when we tell stories with a clear intention, there comes the time when they take on a life of their own, like a butterfly reaching the ones holding out their hands to recieve. That is why we create stories for everyone - still listening."}
                </p>

                <div className='work-banner'>
                    <ul>
                        {[...work_banner_items, ...work_banner_items].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <h2 id='work-title'>
                    {language === "de"
                        ? "Unsere Arbeit"
                        : "Our Work"}
                </h2>

                <p>
                    {language === "de"
                        ? "Wir erstellen jede Art von 2D-Animation, Motion Design, egal ob Kurzfilme, Serien oder kommerzielle Projekte."
                        : "We create any 2D animation, motion design, wether it's short films, series or commercial projects."}
                </p>

                <p>
                    {language === "de"
                        ? "Wir machen alles. Vom Charakterdesign über das Storyboarding, die Roh- und Reinzeichnung bis hin zur Hintergrundgestaltung und der endgültigen Produktion."
                        : "We do everything. From character design to storyboarding, to rough and clean animation, to background art and final productions."}
                </p>

                <p>
                    {language === "de"
                        ? "Wir arbeiten mit Menschen zusammen, denen Geschichten ebenso wichtig sind wie die Art und Weise, wie sie erzählt werden."
                        : "We collaborate with people who care about stories as much as how they are told."}
                </p>

                <div className='get-in-touch-section'>
                    <h3>
                    {language === "de"
                        ? "Wollen Sie sich mit uns austauschen?"
                        : "Want to get in touch?"}
                        <br /><span>
                        {language === "de"
                        ? "Schreiben Sie uns!"
                        : "Reach out!"}
                        </span></h3>
                    <a>contact@momoon-studio.com</a>
                </div>
            </div>
        </PageLayout>
    );
}

export default About;
