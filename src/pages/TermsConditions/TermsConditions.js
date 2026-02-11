import './TermsConditions.css';
import PageLayout from '../PageLayout';
import { useLanguage } from "../../components/Language";

function TermsConditions() {

    const { language, toggleLanguage } = useLanguage();

    return (
        <PageLayout>
            <div id='terms_conditions'>
                <h1>
                    {language === "de"
                        ? "Datenschutzerklärung"
                        : "Terms & Conditions"}
                </h1>

                <p>
                    1. Verantwortlicher:<br />
                    Laura Jürgensmeier
                    Durlacher Str. 21B
                    10715 Berlin
                    contact@momoon-studio.com
                </p>

                <p>
                    <span>2. Verarbeitung personenbezogener Daten über das Kontaktformular: </span>
                    Wenn Sie unser Kontaktformular nutzen, erheben und verarbeiten wir die von Ihnen eingegebenen personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Nachricht), um Ihre Anfrage zu bearbeiten. Diese Daten werden ausschließlich für diesen Zweck verwendet und nicht an Dritte weitergegeben.
                    Ihre Daten werden in unserem Verzeichnis der Verarbeitungstätigkeiten dokumentiert und nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist.
                </p>

                <p>
                    <span>3. Speicherung von Einstellungen im LocalStorage: </span>
                    Auf dieser Website speichern wir bestimmte Einstellungen (z. B. Ihre Sprachpräferenz) lokal im Browser über localStorage. Diese Daten verbleiben ausschließlich auf Ihrem Gerät und werden nicht an uns oder Dritte übermittelt.
                </p>

                <p>
                    <span>4. Ihre Rechte:</span>
                    Sie können jederzeit Auskunft über die von Ihnen gespeicherten personenbezogenen Daten verlangen, unrichtige Daten korrigieren lassen oder die Löschung Ihrer Daten verlangen. Bitte kontaktieren Sie uns dafür unter der oben angegebenen E-Mail-Adresse.
                </p>
            </div>
        </PageLayout>
    );
}

export default TermsConditions;
