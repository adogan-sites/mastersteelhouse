import React from 'react';
import Image from "next/image";

import {Section} from "@/components/ui";

import DATA from "../../../data/data.json";

const AboutHero = ({isDark}) => {
    const {
        title,
        description,
        paragraphs,
        image
    } = DATA.aboutHero;

    return (
        <Section
            title={title}
            isH1Title={true}
            description={description}
            isDark={isDark}
        >
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Image
                        src={image}
                        alt="hakkimizda"
                        width={555}
                        height={370}
                        className="rounded-border shadow-primary"
                    />
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12 text-content">
                    {paragraphs.map((p, i) => (<p key={`p-${i}`}>{p}</p>))}
                </div>
            </div>
        </Section>
    );
};

export default AboutHero;