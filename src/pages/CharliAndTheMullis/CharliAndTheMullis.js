import './CharliAndTheMullis.css';
import './CharliAndTheMullis_desktop.css';
import PageLayout from '../PageLayout';
import CharliAndTheMullis_teaser from './CharliandMullis.jpg'
import { useLanguage } from "../../components/Language";

function CharliAndTheMullis() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='charliandthemullis'>
                <header>
                    <img src={(CharliAndTheMullis_teaser)} />
                    <div id='title_container'>
                        <p>
                            {language === "de"
                                ? "Kurzformat:"
                                : "Shorts:"}
                        </p>
                        <div>
                            <h1>Charli und die Mullis (orig.)</h1>
                            <p id='english_title'>Charli and the Mullis (English Version)</p>
                            <ul id='attributes'>
                                <div>
                                    <li>On-Going</li>
                                    <li className='line'>|</li>
                                    <li>7 x 15 sec.</li>
                                    <li className='line'>|</li>
                                    <li>4K</li>
                                    <li className='line'>|</li>
                                    <li>9:16</li>
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
                            ? "Charli ist ein kleiner Junge, der zusammen mit den Mullemoons, den Mullis (Originalfassung: Mullemonde), den Geistern des Mondes, im Wald lebt. In ihren kurzen Videos zeigen Charli und die Mullis Momente aus ihrem Leben, tanzen gerne oder machen bei niedlichen Trends mit."
                            : "Charli is a young boy living in the forest together with the Mullemoons, the Mullis (orig. Vers.: Mullemonde), spirits of the moon. In their short videos, Charli and the Mullis are sharing moments of their lifes, enjoying some dances or participate in cute trends."}
                    </p>

                    <p className='credits'>
                        {language === "de"
                            ? "Eine Arbeit von: Momoon Studio"
                            : "A work by: Momoon Studio"}
                    </p>

                    <div className='img_teaser_container'>
                        <iframe width="315" height="560"
                            src="https://youtube.com/embed/woupUhS8B_U?si=3CK3tBbupkpdoJsh"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        <iframe width="315" height="560"
                            src="https://youtube.com/embed/K-u0r17HsuQ?si=NWWRhdqnO8NGALYc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                        <iframe width="315" height="560"
                            src="https://youtube.com/embed/zUtW0QI7jeQ?si=eh0PHr0InDduoFDD"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </PageLayout>
    );
}

export default CharliAndTheMullis;
