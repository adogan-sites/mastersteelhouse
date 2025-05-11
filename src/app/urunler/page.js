import React from 'react';

import {getMetaByPage} from "@/utils";
import {Section} from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import DATA from "@/data/data.json";

export const metadata = getMetaByPage({ href: '/urunler' });
const { products } = DATA;

const Services = () => {
    return (
        <Section
            title='Ürünler'
            isDark={false}
        >
            <div className="row">
                {
                    products.map(({
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

export default Services;
