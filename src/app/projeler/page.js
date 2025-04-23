import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DATA from '@/data/data.json';
import {getMetaByPage} from '@/utils';
import {Section} from "@/components/ui";

export const generateMetadata = () => {
    return getMetaByPage({href: 'projeler'});
}

const ProjectsPage = () => {
    const {projects} = DATA;
    return (
        <Section
            title="Projelerimiz"
            description="Tamamladığımız bazı özel projelerimize göz atın"
        >
            <div className="row">
                {projects.map((project, index) => (
                    <div key={`project-${index}`} className="col-md-4 col-sm-4 col-xs-12">
                        <Link href={`/projeler/${project.id}`} className="text-decoration-none text-dark">
                            <div className="project-card">
                                <div className="project-image position-relative" style={{height: "250px"}}>
                                    <Image
                                        src={project.image}
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                        alt={project.title}
                                    />
                                </div>
                                <div className="project-info p-3">
                                    <h5>{project.title}</h5>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ProjectsPage;
