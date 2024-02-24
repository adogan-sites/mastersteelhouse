import React, {Suspense} from 'react';
import {notFound} from "next/navigation";

import DATA from "../../../data/data.json";

import * as contentComponents from '../_contentComponents';

export const generateStaticParams = () => DATA.services.map(({ href }) => ({
    service: href.split('/').pop(),
}));

const ServicePage = ({params}) => {
    const {service: serviceName} = params;
    const service = DATA.services.find(({ href }) => href.includes(serviceName));
    const { contentComponent } = service;
    const ContentComponent = contentComponents[contentComponent];

    if (!ContentComponent) {
        return notFound();
    }

    return (
        <div className="section-block">
            <div className="container">
                <Suspense fallback={<span>Yükleniyor...</span>}>
                    <ContentComponent service={service} />
                </Suspense>
            </div>
        </div>
    );
};

export default ServicePage;