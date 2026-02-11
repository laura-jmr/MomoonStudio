import './ReachOut.css';
import './ReachOut_mobile_landscape.css';
import './ReachOut_desktop.css';
import PageLayout from '../PageLayout';
import { useLanguage } from "../../components/Language";

function ReachOut() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='reach-out'>
                <div id='background-video-container'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="background-video">
                        <source src="contact_dark.mp4" type="video/mp4" />
                    </video>
                </div>
                <h1>
                    {language === "de"
                        ? "Wollen Sie Kontakt aufnehmen?"
                        : "Want to get in touch?"}
                    <br /><span>
                        {language === "de"
                            ? "Schreiben Sie uns!"
                            : "Reach out!"}
                    </span></h1>
                <div id='email_text'>
                    <p><span>
                        {language === "de"
                            ? "Schreiben Sie uns eine Email:"
                            : "Write us an email:"}
                    </span></p><a>contact@momoon-studio.com</a>
                </div>
                <p className='social_media_text'><span>
                    {language === "de"
                        ? "Schreiben Sie uns auf Social Media:"
                        : "Write us an social media:"}
                </span></p>
                <div className='socials'>
                    <ul>
                        <div>
                            <li><a href='https://vimeo.com/momoonstudio' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-vimeo"></i> @momoonstudio</a></li>
                            <li><a href='https://www.instagram.com/momoonstudio/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i> @momoonstudio</a></li>
                        </div>
                        <div>
                            <li><a href='https://youtube.com/@momoonstudio' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i> Momoon Studio</a></li>
                            <li><a href='https://tiktok.com/@momoonstudio' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-tiktok"></i> @momoonstudio</a></li>
                        </div>
                    </ul>
                </div>
                <p className='social_media_text'><span>
                    {language === "de"
                        ? "Oder schreiben Sie uns hier:"
                        : "Or write us here:"}
                </span></p>
                <form>
                    <input type="text" id="name" name="name" placeholder='*Name' required></input>
                    <input type="email" id="email" name="email" placeholder='*E-Mail' required></input>
                    <textarea type="text" id="message" name="message" placeholder={language === "de"
                        ? "*Nachricht"
                        : "*message"} required></textarea>
                    <div>
                        *<input type='checkbox' id='agb_checkbox' required></input> 
                        Ich habe die <a href='/termsconditions' target="_blank">Datenschutzerklärung</a> gelesen und bin damit einverstanden.
                    </div>
                    <button type="submit" id="submit-button">{language === "de"
                        ? "Senden"
                        : "Send"}</button>
                </form>
            </div>
        </PageLayout>
    );
}

export default ReachOut;
