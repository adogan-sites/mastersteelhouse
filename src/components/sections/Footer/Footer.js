import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="footer-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-content inner-footer">
                                <h3 className="mb-25">A Bit About Company</h3>
                                <Link href="/">
                                    <Image width="168" height="70" src="/images/logoWhite.png" alt="footer-logo"/>
                                </Link>
                                <p className="mt-20">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form, by injected humour.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-content clearfix">
                                <h3>Company Navigation</h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>

                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Project Single</a></li>
                                    <li><a href="#">Blog Post</a></li>
                                    <li><a href="#">Service Single</a></li>
                                    <li><a href="#">Partners</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-content">
                                <h3 className="mb-25">Company Office</h3>
                                <div className="footer-contact">
                                    <ul>
                                        <li><i className="fa fa-map-marker"></i>Location: Sheram 113, England</li>
                                        <li><i className="fa fa-phone"></i>Phone: +1-23-456789</li>
                                        <li><i className="fa fa-clock-o"></i>Time: Tusday-Monday : 9:00am-6:00pm</li>
                                        <li><i className="fa fa-envelope-o"></i>Email: example@email.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom center-holder">
                <h6>© Copyright 2017 SpecThemes - All Rights Reserved</h6>
            </div>
        </footer>
    );
};

export default Footer;
