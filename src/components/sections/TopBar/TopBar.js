import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import DATA from "../../../data/data.json";

const TopBar = () => {
    const { workingHours, phoneNumber, email, facebookPage, twitterPage, instagramPage } = DATA.companyInfo;

    return (
        <div id="top-bar">
            <Container>
                <Row className="d-none d-md-flex">
                    <Col md={9} sm={8}>
                        <ul className="top-bar-info">
                            <li><i><FontAwesomeIcon icon={faClock}/></i>{workingHours}</li>
                            <li><i><FontAwesomeIcon icon={faPhone}/></i>{phoneNumber}</li>
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
                            <a href={twitterPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faXTwitter}/>
                                    </i>
                                </a>
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
                                <a href={facebookPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href={twitterPage} target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faXTwitter}/>
                                    </i>
                                </a>
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
            </Container>
        </div>
    );
};

export default TopBar;