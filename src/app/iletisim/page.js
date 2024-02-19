import React from 'react';
import DATA from "@/data/data.json";
import {faBriefcaseClock, faPhone, faMap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contact = () => {
    const {
        metadata: {
            description
        },
        companyInfo: {
            name,
            address,
            phoneNumber,
            workingHours,
            email
        },
        menu
    } = DATA;

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sx-6 col-xs-12">
                        <div className="heading-sm">
                            <h5>Our Location</h5>
                        </div>
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.602759652033!2d32.62475387732155!3d40.03964767150261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345b12ce21b31%3A0xb6dc4bd1748db29a!2sMaster%20Steel%20House%20Hafif%20%C3%87elik%20Sistemleri!5e0!3m2!1str!2str!4v1708372694868!5m2!1str!2str"
                                width="555"
                                height="330"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sx-6 col-xs-12">
                        <div className="heading-sm">
                            <h5>Send Message</h5>
                        </div>
                        <form method="post" className="contact-form">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email" placeholder="E-mail adress"/>
                                </div>

                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="phone" placeholder="Phone Number"/>
                                </div>

                                <div className="col-xs-12">
                                    <textarea name="message" placeholder="Your Message"></textarea>
                                </div>

                                <div className="center-holder">
                                    <button type="submit" className="button-xs dark-button mt-20 mb-15">Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sx-4 col-xs-12">
                        <div className="contact-box clearfix">
                            <div className="contact-icon">
                                <i className="icon-map">
                                    <FontAwesomeIcon icon={faMap}/>
                                </i>
                            </div>
                            <div className="contact-info">
                                <h4>Adresimiz</h4>
                                <p>{address}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sx-4 col-xs-12">
                        <div className="contact-box clearfix">
                            <div className="contact-icon">
                                <i className="icon-phone-reciever">
                                    <FontAwesomeIcon icon={faPhone}/>
                                </i>
                            </div>
                            <div className="contact-info">
                                <h4>Telefon & Email</h4>
                                <p>{phoneNumber}<br/>{email}</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sx-4 col-xs-12">
                        <div className="contact-box clearfix">
                            <div className="contact-icon">
                                <i className="icon-wall-clock">
                                    <FontAwesomeIcon icon={faBriefcaseClock}/>
                                </i>
                            </div>
                            <div className="contact-info">
                                <h4>Calisma Saatleri</h4>
                                <p>{workingHours}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;