import React from 'react';
import {Section} from "@/components/ui";
import Image from "next/image";

import DATA from "../../../data/data.json";

const ProjectsHero = () => {
    const {title, description, projects} = DATA.projectsHero;
    return (
        <Section
            title={title}
            description={description}
            isDark={true}
        >
            <div className="row">
                <div className="owl-carousel owl-theme d-flex" id="projects-carousel">
                    {
                        projects.map(({title, image, href}) => {
                            return (
                                <div key={title} className="project-item">
                                    <Image
                                        src={image}
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        alt="project-img"
                                    />
                                    <div className="project-item-overlay">
                                        <div className="project-item-content">
                                            <h6>{title}</h6>
                                            <a href={href}>Detali Bilgi</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </Section>
    );
};

export default ProjectsHero;