import React from 'react';
import {faBriefcaseClock, faPhone, faMap} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import DATA from "@/data/data.json";

import {getMetaByPage} from "@/utils";
import {ContactForm} from "@/components/sections";
import Link from "next/link";

export const metadata = getMetaByPage({ href: '/iletisim' });

const Contact = () => {
    const {
        companyInfo: {
            address,
            phoneNumber,
            workingHours,
            email
        }
    } = DATA;

    return (
        <div className="section-block">
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
                                <p>
                                    <Link style={{marginLeft: "4px"}}
                                          href={`tel:${phoneNumber.replace(/ /g, '')}`}>{phoneNumber}</Link>
                                    <br/>
                                    <Link style={{marginLeft: "4px"}}
                                          href={`mailto:${email.replace(/ /g, '')}`}>{email}</Link>
                                </p>

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
                                <h4>Çalışma Saatleri</h4>
                                <p>{workingHours}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sx-6 col-xs-12 mb-40">
                        <div className="heading-sm">
                            <h5>Konumumuz</h5>
                        </div>
                        <div id="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.602759652033!2d32.62475387732155!3d40.03964767150261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345b12ce21b31%3A0xb6dc4bd1748db29a!2sMaster%20Steel%20House%20Hafif%20%C3%87elik%20Sistemleri!5e0!3m2!1str!2str!4v1708372694868!5m2!1str!2str"
                                width="100%"
                                height="380"
                                style={{border: "0"}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sx-6 col-xs-12">
                        <div className="heading-sm">
                            <h5>Bize Yazın</h5>
                        </div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
