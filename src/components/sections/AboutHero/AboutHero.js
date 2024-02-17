import React from 'react';
import {Section} from "@/components/ui";

import DATA from "../../../data/data.json";

const AboutHero = () => {
    const {
        title,
        description,
        paragraphs
    } = DATA.aboutHero;

    return (
        <Section
            title={title}
            description={description}
        >
            { paragraphs.map((p, i) => (<p key={`p-${i}`}>{p}</p>)) }
        </Section>
    );
};

export default AboutHero;