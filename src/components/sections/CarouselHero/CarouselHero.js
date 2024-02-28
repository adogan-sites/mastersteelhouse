'use client'

import React from 'react';
import Image from 'next/image'

import Carousel from "react-bootstrap/Carousel";

import DATA from "../../../data/data.json";

import './styles.scss';
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

const CarouselHero = () => {
    const {slides} = DATA.carouselHero;

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return (
        <Carousel className="carousel-hero pogoSlider">
            {
                slides.map(({image, imgAlt, title, description, href}, index) => (
                    <Carousel.Item key={`${title}-${index}`} className="pogoSlider-slide">
                        <div className="slide-image">
                            <Image
                                src={image}
                                alt={imgAlt}
                                fill
                                sizes="100vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <Carousel.Caption className={`container text-start ${isMobile ? 'start-0 end-0' :''}`}>
                            <div className="slider-content">
                                <div className="row">
                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                        <h2 className="pogoSlider-slide-element" data-in="slideLeft"
                                            data-out="slideRight" data-duration="800" data-delay="550">{title}</h2>
                                        <p className="pogoSlider-slide-element hidde" data-in="slideRight"
                                           data-out="slideUp" data-duration="850" data-delay="1000">{description}</p>
                                        {href && (
                                            <Link
                                                href={href}
                                                className="button-lg primary-button mt-30 pogoSlider-slide-element"
                                            >
                                                Detaylı Bilgi
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

export default CarouselHero;