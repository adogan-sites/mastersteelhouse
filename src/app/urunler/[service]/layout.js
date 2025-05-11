import React from 'react';
import Image from "next/image";

import DATA from "@/data/data.json";

const ServicePageLayout = ({ children, params: { service: serviceName } }) => {
    const {
        title,
        images = []
    } = DATA.services.find(({ href }) => href.includes(serviceName));

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-start w-100">
                        {
                            images.map((image, index) => (
                                <div
                                    key={`${title} ${index}`}
                                    style={{width: "410px", height: "273px"}}
                                >
                                    <Image
                                        src={image}
                                        alt={`${title} ${index}`}
                                        width={410}
                                        height={273}
                                        className="rounded-border"
                                    />
                                </div>
                            ))
                        }
                    </div>
                    { children }
                </div>
            </div>
        </div>
    );
};

export default ServicePageLayout;