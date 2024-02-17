'use client'

import React from 'react';
import Image from 'next/image'
import {Carousel} from "react-bootstrap";

import image1 from './images/b-5.png';
import image2 from './images/bun2.png';
import image3 from './images/House-1-2.png';
import image4 from './images/IMG-20200629-WA0016.png';
import image5 from './images/master99.png';
import image6 from './images/mastr.png';

import DATA from "../../../data/data.json";

import './styles.scss';

const CarouselHero = () => {
    const { slides } = DATA.carouselHero;

    const IMAGES = {
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    };

    return (
        <Carousel className="carousel-hero">
            {
                slides.map(({ image, imgAlt, title, description }) => (
                    <Carousel.Item key={title}>
                        <Image
                            src={IMAGES[image]}
                            alt={imgAlt}
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                        />
                        <Carousel.Caption>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

export default CarouselHero;