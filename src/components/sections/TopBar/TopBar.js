import React from 'react';
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

import DATA from "../../../data/data.json";

const TopBar = () => {
    const {phoneNumber, phoneNumber2, email, facebookPage, twitterPage, instagramPage} = DATA.companyInfo;

    return (
        <div id="top-bar">
            <Container>
                <Row className="d-none d-md-flex">
                    <Col md={9} sm={8}>
                        <ul className="top-bar-info">
                            <li><i><FontAwesomeIcon icon={faPhone}/></i>{phoneNumber}</li>
                            <li><i><FontAwesomeIcon icon={faPhone}/></i>{phoneNumber2}</li>
                            <li><i><FontAwesomeIcon icon={faEnvelope}/></i>{email}</li>
                        </ul>
                    </Col>
                    <Col md={3} sm={4}>
                        <ul className="social-icons d-none d-lg-block">
                            <li>
                                <a href={facebookPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </i>
                                </a>
                            </li>
                            <li>
                                <Link href={twitterPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faXTwitter}/>
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <a href={instagramPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row className="d-flex d-md-none">
                    <Col>
                        <ul className="social-icons float-start">
                            <li>
                                <Link href={facebookPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link href={twitterPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faXTwitter}/>
                                    </i>
                                </Link>
                            </li>
                            <li>
                                <Link href={instagramPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </i>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;
