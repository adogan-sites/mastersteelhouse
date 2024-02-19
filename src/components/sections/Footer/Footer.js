import React from 'react';
import Image from "next/image";
import Link from "next/link";

import DATA from "../../../data/data.json";
import {faMapMarker, faPhone, faClock, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
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

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-content inner-footer">
                                <h3 className="mb-25">{name}</h3>
                                <Link href="/">
                                    <Image width="168" height="70" src="/images/logoWhite.png" alt="footer-logo"/>
                                </Link>
                                <p className="mt-20">{description}</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-content clearfix">
                                <h3>Sayfalar</h3>
                                <ul>
                                    {
                                        menu.map(({name, href}) => (
                                            <li><Link href={href}>{name}</Link></li>
                                        ))
                                    }
                                </ul>

                                <ul>
                                    {
                                        menu
                                            .find(m => m.href === '/hizmetler')
                                            .children
                                            .map(({name, href}) => (
                                                <li><Link href={`/hizmetler${href}`}>{name}</Link></li>
                                            ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-content">
                                <h3 className="mb-25">Iletisim</h3>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <i className="fa fa-map-marker">
                                                <FontAwesomeIcon icon={faMapMarker}/>
                                            </i>
                                            {address}
                                        </li>
                                        <li>
                                            <i className="fa fa-phone">
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </i>
                                            Telefon: {phoneNumber}
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o">
                                                <FontAwesomeIcon icon={faClock}/>
                                            </i>
                                            {workingHours}
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o">
                                                <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                            </i>
                                            {email}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom center-holder">
                <h6>© Copyright {year} Master Steel House - Tüm Hakları Saklıdır</h6>
            </div>
        </footer>
    );
};

export default Footer;
