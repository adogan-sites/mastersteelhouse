import React from 'react';

import {ServicesHero} from "@/components/sections";

import {getMetaByPage} from "@/utils";

export const metadata = getMetaByPage({ href: '/urunler' });

const Services = () => <ServicesHero />;

export default Services;
