import React from 'react';
import {Section} from "@/components/ui";

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
                <div className="owl-carousel owl-theme" id="projects-carousel">
                    {
                        projects.map(({title, image, href}) => {
                            return (
                                <div key={title} className="project-item">
                                    <img src="http://via.placeholder.com/380x253" alt="project-img"/>
                                    <div className="project-item-overlay">
                                        <div className="project-item-content">
                                            <h6>{title}</h6>
                                            <a href={href}>Read More</a>
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