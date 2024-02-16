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

import './styles.scss';

const CarouselHero = () => {
    const SLIDES = [
        {
            image: image1,
            imgAlt: 'Tiny House',
            title: 'asdasd',
            description: 'asdasdadwerewrwerwer we wer wer we rdadsd'
        },
        {
            image: image2,
            imgAlt: 'ASJKDH:ASKJHD lAKLJSD ',
            title: 'ASJKDH:ASKJHD lAKLJSD ',
            description: 'asdasdadwerewrwerwer we wer wer we rdadsd'
        },
        {
            image: image3,
            imgAlt: 'ALJKSDHSD :AKLSD H:LKAS J',
            title: 'ALJKSDHSD :AKLSD H:LKAS J',
            description: 'asdasdadwerewrwerwer we wer wer we rdadsd'
        }
    ];

    return (
        <Carousel className="carousel-hero">
            {
                SLIDES.map(({ image, imgAlt, title, description }) => (
                    <Carousel.Item key={title}>
                        <Image
                            src={image}
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