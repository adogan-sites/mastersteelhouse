import React from 'react';
import Image from 'next/image'
import {Section} from "@/components/ui";

import DATA from "../../../data/data.json";
import Link from "next/link";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ServicesHero = () => {
    const {
        servicesHero: { title },
        services
    } = DATA;

    return (
        <Section
            title={title}
            isDark={true}
        >
            <div className="row">
                {
                    services.map(({
                         title,
                         heroDescription,
                         href,
                         heroImage
                     }) => {
                        return (
                            <div className="col-md-4 col-sm-4 col-xs-12" key={title}>
                                <div className="service-grid clearfix">
                                    <Image
                                        src={heroImage}
                                        alt={title}
                                        width={358}
                                        height={240}
                                    />
                                    <div className="service-grid-inner content-holder">
                                        <h4>{title}</h4>
                                        <p>{heroDescription}</p>
                                        <Link href={href}>Detaylı Bilgi<FontAwesomeIcon icon={faPlus}/></Link>
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