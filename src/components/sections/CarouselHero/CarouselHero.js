'use client'

import React from 'react';
import Image from 'next/image'
import {Carousel} from "react-bootstrap";

import DATA from "../../../data/data.json";

import './styles.scss';

const CarouselHero = () => {
    const { slides } = DATA.carouselHero;

    return (
        <Carousel className="carousel-hero">
            {
                slides.map(({ image, imgAlt, title, description }) => (
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