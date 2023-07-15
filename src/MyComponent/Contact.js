import React from 'react';
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    return (
        <div>
            <div className="contact-info">
                <h1 class="contact-heading">Contact <span>Info</span></h1>

                <section id="contact-section">
                    <div class="contact-1">
                        <i><FontAwesomeIcon icon={faPhone} style={{color: "#f50a0a",}} /></i>
                        <h1>phone</h1>
                        <p>+92 3169512020 <br />
                        +92 3150166360 <br />
                        +92 3109887050
                        </p>
                        
                    </div>

                    <div class="contact-1">
                    <i><FontAwesomeIcon icon={faEnvelope} style={{color: "#ed0c0c",}} /></i>
                        <h1>mail</h1>
                        <p>kararmuhammad8@gmail.com <br />
                        daudrazzaq7890@gmail.com</p>
                    </div>
                    <div class="contact-1">
                        <i><FontAwesomeIcon icon={faHouse} style={{color: "#ed0c0c",}} /></i>
                        <h1>address</h1>
                        <p>Village and post office usterzai payan Tehsil and Distric kohat</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
