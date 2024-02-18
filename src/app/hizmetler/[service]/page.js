import React from 'react';
import DATA from "../../../data/data.json";

export const generateStaticParams = () => {
    const services = DATA.menu.find(m => m.href === "/hizmetler").children;

    return services.map((service) => ({
        service: service.href.slice(1),
    }))
};

const ServicePage = ({ params }) => {
    const { service } = params;

    return (
        <div>
            HIZMET SAYFASI {service}
        </div>
    );
};

export default ServicePage;