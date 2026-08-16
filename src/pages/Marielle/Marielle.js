import './Marielle.css';
import './Marielle_desktop.css';
import PageLayout from '../PageLayout';
import marielle_teaser from './Marielle3.jpg'
import marielle_teaser1 from './IMG_8369.jpg'
import marielle_teaser2 from './IMG_8370.jpg'
import marielle_teaser3 from './IMG_8371.jpg'
import character_design1 from './character_design1.PNG'
import storyboard1 from './storyboard1.png'
import storyboard2 from './storyboard2.PNG'
import storyboard3 from './storyboard3.PNG'
import storyboard4 from './storyboard4.PNG'
import storyboard5 from './storyboard5.PNG'
import seperatorStars from './seperator_illustration.PNG'
import { useLanguage } from "../../components/Language";

function Marielle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='marielle'>
                <header>
                    <img src={(marielle_teaser)} />
                    <div id='title_container'>
                        <p className='format'>
                            {language === "de"
                                ? "Kurzfilm:"
                                : "Short Film:"}
                        </p>
                        <div className='marielle-title'>
                            <h1>Marielle und die Waldgeister (orig.)</h1>
                            <p id='english_title'>Marielle and the Spirits of the Forest (English Version)</p>
                        </div>
                        <ul id='attributes'>
                            <div>
                                <li>In-Progress</li>
                                <li className='line'>|</li>
                                <li>20 min.</li>
                                <li className='line'>|</li>
                                <li>4K</li>
                                <li className='line'>|</li>
                                <li>16:9</li>
                                <li className='line'>|</li>
                                <li>FSK: 0</li>
                                <li className='line'>|</li>
                                <li>2D Animation</li>
                            </div>
                        </ul>
                    </div>
                </header>

                <div className='seperation-line'></div>
                <div id='content'>
                    <p className='description'>
                        {language === "de"
                            ? "In „Marielle und die Waldgeister” begleiten wir ein kleines Mädchen auf ihrem Abenteuer im Wald. Es ist ein Kurzfilm über Liebe, Freundschaft, Heilung und verlorene Seelen. „Berührend mit seinem romantischen und fantasievollen Stil.”"
                            : "In 'Marielle and the Spirits of the Forest (orig. V.: 'Marielle and the Spirits of the Forest') we follow a little girl named Marielle into her adventure of the woods. When going into the woods near her grandmother's house, she meets a group of children, among them the boy Ennio, which she befriends quickly. This is a short film about love, friendship, and the healing of lost souls."}
                    </p>

                    <div className='img_teaser_container'>
                        <img src={(marielle_teaser1)} />
                        <img src={(marielle_teaser2)} />
                        <img src={(marielle_teaser3)} />
                    </div>

                    <p className='credits'>
                        {language === "de"
                            ? "Eine Arbeit von: Momoon Studio"
                            : "A work by: Momoon Studio"}
                    </p>
                    <div className='content_seperator'>
                        <div className='seperator_illustrations'>
                            <img src={seperatorStars} alt='illustration of little stars as a seperator between the studio video and the content' />
                            <img src={seperatorStars} alt='illustration of little stars as a seperator between the studio video and the content' />
                        </div>
                    </div>
                    <h2 className='content_section'>Behind the Scenes</h2>
                    <p>It all started with a story idea of a little girl, with a childish naive, meeting a boy in the forest. The story was inspired by my own childhood in the western lands of Germany. I lived across a tiny forest, in which I went to play and explore many times. The feeling of exploring nature, finding old cabins or animals, was the lead emotion I wanted to capture in the story. So I wrote a short story calles "The Nightwanderer" (orig.: 'Die Nachtwandlerin') of 10 pages about this little girl Marielle, which was later the basis of the short film.
                    </p>
                    <div className='content_row_image_left'>
                        <img src={character_design1} alt='initial character design of Marielle and Ennio' />
                        <p>Based on the short story, I developed a script with detailed scene descriptions and enhanced the dialoges. In the first version of the script, a storyteller was integrated to tell the story to the viewer, but was later erased. As I developed the cinematic images further in my mind, I was able to come up with the character design quickly. Only some color details changed till the final character design.

                            After the characters were set, I developed a storyboard iteratively by sketching out frames on paper first, adjusting them and adding new frames, to digitalizing them, printing, adjusting... till I was satisfied with the storyboard.
                        </p>
                    </div>
                    <br />
                    <p>In the end, I had a 4 1/2 pages of storyboard to start animating with. I started with keyframing the scenes and finishing one frame afer another for the scenes. In total, there are around 90 frames in 10 scenes.</p>
                    <div className='content_row_images'>
                        <img src={storyboard1} />
                        <img src={storyboard2} />
                        <img src={storyboard3} />
                        <img src={storyboard4} />
                        <img src={storyboard5} />
                    </div>
                    <p>The current status of the animation process is around 75% finished. Goal is to finish the short film till the end of this year, 2026. More information coming.</p>
                </div>
            </div>

        </PageLayout>
    );
}

export default Marielle;
