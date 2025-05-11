import React, {Suspense} from 'react';
import {notFound} from "next/navigation";

import DATA from "../../../data/data.json";

import * as contentComponents from '../_contentComponents';

import {getMetaByPage} from "@/utils";

export const generateStaticParams = () => DATA.products.map(({href}) => ({
    product: href.split('/').pop(),
}));

export const generateMetadata = ({ params: {product: productName} }) => {
    return getMetaByPage({ href: productName });
}

const ProductPage = ({params: {product: productName}}) => {
    const {contentComponent} = DATA.products.find(({href}) => href.includes(productName));
    const ContentComponent = contentComponents[contentComponent];

    return !ContentComponent
        ? notFound()
        : (
            <Suspense fallback={<span>Yükleniyor...</span>}>
                <ContentComponent/>
            </Suspense>
        );
};

export default ProductPage;