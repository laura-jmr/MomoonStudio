import './Imprint.css';
import './Imprint_desktop.css';
import PageLayout from '../PageLayout';
import { useLanguage } from "../../components/Language";

function Imprint() {

    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='imprint'>
                <h1>
                    {language === "de"
                        ? "Impressum"
                        : "Imprint"}
                </h1>

                <p>Momoon Studio<br />
                    <br />
                    Laura Jürgensmeier<br />
                    Durlacher Str. 21B<br />
                    10715 Berlin
                </p>

                <p>
                    <span>
                        {language === "de"
                            ? "Kontakt:"
                            : "Contact:"}
                    </span><br />
                    contact@momoon-studio.com
                </p>

                <p>
                    <span>
                        {language === "de"
                            ? "Urheberrecht:"
                            : "Copyright:"}
                    </span><br />
                    {language === "de"
                        ? "Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung oder Nutzung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors."
                        : "The content and works published on this website are protected by German copyright law. Any form of reproduction, editing, distribution, or use beyond the limits of copyright law requires the prior written consent of the respective author."}
                </p>

                <p>
                    <span>
                        {language === "de"
                            ? "Haftungsausschluss:"
                            : "Disclaimer:"}
                    </span><br />
                    {language === "de"
                        ? "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Darüber hinaus übernimmt der Autor keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."
                        : "The content of this website has been created with the greatest care. However, no guarantee is given for the accuracy, completeness, or timeliness of the content. Furthermore, the author assumes no liability for the content of external links. The operators of the linked pages are solely responsible for their content."}
                </p>

                <p>
                    <span>
                        {language === "de"
                            ? "Datenschutz:"
                            : "Data Protection:"}
                    </span><br />
                    {language === "de"
                        ? "Personenbezogene Daten (z. B. Name, E-Mail-Adresse), die Sie uns über Kontaktformulare oder E-Mail senden, werden nur zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht. Wir führen diese Verarbeitungstätigkeit gemäß Art. 6 Abs. 1 lit. b) DSGVO im Rahmen unserer berechtigten Interessen durch. Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist.  Diese Website verwendet nur notwendige Cookies, um die Nutzung der Seite zu ermöglichen. Andere Cookies werden nur mit Ihrer Einwilligung gesetzt. Sie können jederzeit Auskunft über Ihre gespeicherten personenbezogenen Daten verlangen, unrichtige Daten korrigieren lassen oder die Löschung Ihrer Daten verlangen. Der Anbieter weist darauf hin, dass die Übertragung von Daten im Internet (z. B. per E-Mail) Sicherheitslücken aufweisen und ein lückenloser Schutz der Daten vor dem Zugriff Dritter nicht gewährleistet werden kann. Der Anbieter übernimmt keine Haftung für die durch solche Sicherheitslücken entstandenen Schäden. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."
                        : "Personal data (e.g., name, email address) that you provide to us via contact forms or email will only be used to process your inquiry. Data will not be shared with third parties. This website uses only necessary cookies to enable its functionality. Other cookies are only set with your consent. You may request information about your stored personal data at any time, have incorrect data corrected, or request the deletion of your data. The provider points out that the transmission of data over the Internet (e.g., via email) may have security vulnerabilities, and complete protection of data from access by third parties cannot be guaranteed. The provider assumes no liability for damages resulting from such security gaps. The use of contact information published within the framework of the legal notice obligation by third parties for the purpose of sending unsolicited advertising and informational materials is hereby expressly prohibited. The operators of the site expressly reserve the right to take legal action in the event of unsolicited sending of advertising information, such as spam emails."}
                </p>
            </div>
        </PageLayout>
    );
}

export default Imprint;
