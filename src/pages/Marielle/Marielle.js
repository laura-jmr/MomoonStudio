import './Marielle.css';
import './Marielle_desktop.css';
import PageLayout from '../PageLayout';
import marielle_teaser from './IMG_8368.jpg'
import marielle_teaser1 from './IMG_8369.jpg'
import marielle_teaser2 from './IMG_8370.jpg'
import marielle_teaser3 from './IMG_8371.jpg'
import { useLanguage } from "../../components/Language";

function Marielle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='marielle'>
                <header>
                    <img src={(marielle_teaser)} />
                    <div id='title_container'>
                        <p>
                            {language === "de"
                                ? "Kurzfilm:"
                                : "Short Film:"}
                        </p>
                        <div>
                            <h1>Marielle und die Waldgeister (orig.)</h1>
                            <p id='english_title'>Marielle and the Spirits of the Forest (English Version)</p>
                            <ul id='attributes'>
                                <div>
                                    <li>TBA</li>
                                    <li className='line'>|</li>
                                    <li>20 min.</li>
                                    <li className='line'>|</li>
                                    <li>4K</li>
                                    <li className='line'>|</li>
                                    <li>16:9</li>
                                    <li className='line'>|</li>
                                </div>
                                <div>
                                    <li>FSK: 0</li>
                                    <li className='line'>|</li>
                                    <li>2D Animation</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </header>

                <div className='seperation-line'></div>
                <div id='content'>
                    <p className='description'>
                        {language === "de"
                            ? "In „Marielle und die Waldgeister” (engl. Originaltitel: „Marielle and the Spirits of the Forest”) begleiten wir ein kleines Mädchen auf ihrem Abenteuer im Wald. Es ist ein Kurzfilm über Liebe, Freundschaft, Heilung und verlorene Seelen. „Berührend mit seinem romantischen und fantasievollen Stil.”"
                            : "In 'Marielle und die Waldgeister' (orig., engl. V.: 'Marielle and the Spirits of the Forest') we follow a little girl into her adventure of the woods. This is a short film about love, friendship, healing and lost souls. 'Touching with it's romantic and phantasy like style.'"}
                    </p>

                    <p className='credits'>
                        {language === "de"
                            ? "Eine Arbeit von: Momoon Studio"
                            : "A work by: Momoon Studio"}
                    </p>

                    <div className='img_teaser_container'>
                        <img src={(marielle_teaser1)} />
                        <img src={(marielle_teaser2)} />
                        <img src={(marielle_teaser3)} />
                    </div>
                </div>
            </div>

        </PageLayout>
    );
}

export default Marielle;
