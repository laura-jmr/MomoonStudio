import './Ad_mobile.css';
import './Ad_mobile_landscape.css';
import './Ad_tablet.css';
import './Ad_tablet_landscape.css';
import './Ad_desktop.css';
import { useState } from 'react';

function Ad({ title, desc, link }) {
    const [visible, setVisible] = useState(true);

    function removeAd() {
        setVisible(prev => !prev);
    }

    return (
        <>
            {visible && (<div className="ad">
                <h2>{title}</h2>
                <div>
                    <p>{desc}</p>
                    <a href={{ link }}>Read Now</a>
                </div>
                <i className="fa-solid fa-xmark" onClick={removeAd}></i>
            </div>)}
        </>
    );
}

export default Ad;