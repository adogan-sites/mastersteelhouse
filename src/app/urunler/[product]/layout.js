import React from 'react';
import Image from "next/image";

import DATA from "@/data/data.json";

const ProductPageLayout = ({ children, params: { product: productName } }) => {
    const {
        title,
        images = []
    } = DATA.products.find(({ href }) => href.includes(productName));

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

export default ProductPageLayout;