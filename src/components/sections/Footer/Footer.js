'use client'

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "react-scroll-up";
import {FloatingWhatsApp} from "react-floating-whatsapp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faPhone, faEnvelopeOpen, faChevronUp} from "@fortawesome/free-solid-svg-icons";

import DATA from "../../../data/data.json";

const Footer = () => {
    const {
        metadata: {
            description
        },
        companyInfo: {
            name,
            address,
            phoneNumber,
            phoneNumber2,
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
                                <ul className="pages">
                                    {
                                        menu.map(({name, href}) => (
                                            <li key={name}><Link href={href}>{name}</Link></li>
                                        ))
                                    }
                                </ul>

                                <ul className="pages">
                                    {
                                        menu
                                            .find(m => m.href === '/hizmetler')
                                            .children
                                            .map(({name, href}) => (
                                                <li key={name}><Link href={href}>{name}</Link></li>
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
                                            Telefon:
                                            <Link style={{marginLeft: "4px"}}
                                                  href={`tel:${phoneNumber.replace(/ /g, '')}`}>{phoneNumber}</Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-phone">
                                                <FontAwesomeIcon icon={faPhone}/>
                                            </i>
                                            Telefon:
                                            <Link style={{marginLeft: "4px"}}
                                                  href={`tel:${phoneNumber2.replace(/ /g, '')}`}>{phoneNumber2}</Link>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope-o">
                                                <FontAwesomeIcon icon={faEnvelopeOpen}/>
                                            </i>
                                            <Link style={{marginLeft: "4px"}}
                                                  href={`mailto:${email.replace(/ /g, '')}`}>{email}</Link>
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
            <ScrollToTop
                showUnder={160}
                style={{
                    position: 'fixed',
                    bottom: 112,
                    right: 44,
                    cursor: 'pointer',
                    transitionDuration: '0.2s',
                    transitionTimingFunction: 'linear',
                    transitionDelay: '0s'
                }}
            >
                <div className='scroll-to-top'>
                    <i>
                        <FontAwesomeIcon icon={faChevronUp}/>
                    </i>
                </div>
            </ScrollToTop>
            <FloatingWhatsApp
                accountName="Master Steel House"
                phoneNumber="+905334903150"
                statusMessage="Genellikle 1 saat içinde yanıt verir"
                chatMessage="Merhabalar! Nasıl yardımcı olabiliriz? 🤝"
                placeholder="Bir mesaj yazın..."
                avatar="/images/avatar.png"
            />
        </footer>
    );
};

export default Footer;
