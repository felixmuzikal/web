import React from 'react';
import './contact.css'

export default function Contact() {
    return (
        <div className="contact">
            <div className="header">
                <h1>Kontakt</h1>
            </div>
            <div className="text emails">
                <p>Ak máte nejakú otázku, môžete nám napísať na tieto maily:</p>
                <e>Lístky: </e><a href="mailto:rezervacie@felixmuzikal.sk">rezervacie@felixmuzikal.sk</a>
                <br />
                <e>Manažéri projektu: </e><a href="mailto:manazeri@felixmuzikal.sk">manazeri@felixmuzikal.sk</a>
                <br /><br />
                <e>Zapojené triedy:</e>
                <li>Zástupca: trieda@trieda.felixmuzikal.sk</li>
                <li>Manažéri: manazeri@trieda.felixmuzikal.sk</li>
            </div>
            <div className="text felix">
                <a href="http://felix.edupage.org"><h2>Škola Felix</h2></a>
            </div>
            <div className="map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8962.008405910066!2d17.111449925399384!3d48.102113093858904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c89bef676c157%3A0xb86d0fc8aeb0cf64!2s%C5%A0kola%20Felix!5e0!3m2!1ssk!2ssk!4v1600331624345!5m2!1ssk!2ssk" class="embedmap" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
    )
}