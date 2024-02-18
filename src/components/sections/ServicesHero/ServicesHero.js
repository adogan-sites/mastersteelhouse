import React from 'react';
import Image from 'next/image'
import {Section} from "@/components/ui";

import DATA from "../../../data/data.json";

const ServicesHero = () => {
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
                                        src={image}
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