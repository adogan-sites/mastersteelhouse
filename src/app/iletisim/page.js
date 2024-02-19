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
                            <script async defer
                                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3KejW06V4lZLnMXhgFwR317RFfjmmgUc&callback=initMap">
                            </script>
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