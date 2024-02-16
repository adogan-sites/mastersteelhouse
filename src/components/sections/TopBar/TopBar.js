import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
    return (
        <div id="top-bar" className="d-none d-md-block">
            <Container>
                <Row>
                    <Col md={9} xs={12}>
                        <ul className="top-bar-info">
                            <li><i><FontAwesomeIcon icon={faClock}/></i>Haftaiçi: 9:00-20:00, Cumartesi: 9:30-22:00</li>
                            <li><i><FontAwesomeIcon icon={faPhone}/></i>+90 533 490 31 50</li>
                            <li><i><FontAwesomeIcon icon={faEnvelope}/></i>info@mastersteelhouse.com</li>
                        </ul>
                    </Col>
                    <Col md={3} xs={12}>
                        <ul className="social-icons d-none d-lg-block">
                            <li>
                                <a href="https://www.facebook.com/mastersteelhous/" target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </i>
                                </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/mastersteelhous" target='_blank'>
                                    <i>
                                        <FontAwesomeIcon icon={faXTwitter}/>
                                    </i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mastersteelhouse/" target='_blank'>
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