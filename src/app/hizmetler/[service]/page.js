import React, {Suspense} from 'react';
import {notFound} from "next/navigation";

import DATA from "../../../data/data.json";

import * as contentComponents from '../_contentComponents';

export const generateStaticParams = () => DATA.services.map(({href}) => ({
    service: href.split('/').pop(),
}));

const ServicePage = ({params: {service: serviceName}}) => {
    const {contentComponent} = DATA.services.find(({href}) => href.includes(serviceName));
    const ContentComponent = contentComponents[contentComponent];

    return !ContentComponent
        ? notFound()
        : (
            <Suspense fallback={<span>Yükleniyor...</span>}>
                <ContentComponent/>
            </Suspense>
        );
};

export default ServicePage;