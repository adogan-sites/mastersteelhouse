import React from 'react';
import { notFound } from "next/navigation";

import { getMetaByPage } from "@/utils";

import DATA from '@/data/data.json';

import ProjectDetailsClient from '../_contentComponents/ProjectDetailsClient';
import {Section} from "@/components/ui";

export const generateStaticParams = () => DATA.projects.map(({href}) => ({
    project: href.split('/').pop(),
}));

export const generateMetadata = ({ params: { project: projectId } }) => {
    return getMetaByPage({ href: projectId });
}

const ProjectDetailsPage = ({ params: { project: projectId } }) => {
    const project = DATA.projects.find(({ id }) => id === projectId);

    if (!project) {
        return notFound();
    }

    return (
        <Section
            title={project.title}
            description={project.description}
        >
            <ProjectDetailsClient project={project} />
        </Section>
    );
};

export default ProjectDetailsPage;
