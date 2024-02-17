import React from 'react';
import Image from 'next/image'
import {Section} from "@/components/ui";

import konut from './images/konut.png';
import villa from './images/villa.png';
import ofis from './images/ofis.png';
import tiny from './images/tiny.png';
import bungalov from './images/bunga.png';

import DATA from "../../../data/data.json";

const ServicesHero = () => {
    const IMAGES = {
        konut,
        villa,
        ofis,
        tiny,
        bungalov
    };
    const { title, services } = DATA.servicesHero;

    return (
        <Section
            title={title}
            isDark={true}
        >
            <div className="row">
                {
                    services.map(({
                         title,
                         description,
                         href,
                         image
                     }) => {
                        return (
                            <div className="col-md-4 col-sm-4 col-xs-12" key={title}>
                                <div className="service-grid clearfix">
                                    <Image
                                        src={IMAGES[image]}
                                        alt={title}
                                    />
                                    <div className="service-grid-inner content-holder">
                                        <h4>{title}</h4>
                                        <p>{description}</p>
                                        <a href={href}>Detaylı Bilgi</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    );
};

export default ServicesHero;