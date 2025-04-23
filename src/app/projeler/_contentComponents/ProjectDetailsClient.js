'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Tab, Tabs } from 'react-bootstrap';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const ProjectDetailsClient = ({ project }) => {
    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('katPlani');

    const handleOpenLightbox = (index) => {
        setLightboxIndex(index);
        setOpenLightbox(true);
    };

    // Kat planı için lightbox
    const handleOpenKatPlaniLightbox = () => {
        setLightboxIndex(0);
        setOpenLightbox(true);
    };

    // Tüm görselleri lightbox için hazırlama
    const allSlides = [
        { src: project.katPlani.image, alt: project.katPlani.title },
        ...project.uygulanmisHali.map(img => ({ src: img.image, alt: img.title }))
    ];

    return (
        <div className="row">
            <div>
                <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="mb-4"
                >
                    <Tab eventKey="katPlani" title="Kat Planı ve Ölçüler">
                        <div className="row mt-4">
                            <div className="col-md-10 mx-auto">
                                <div 
                                    className="position-relative" 
                                    style={{ height: "500px", cursor: "pointer" }}
                                    onClick={handleOpenKatPlaniLightbox}
                                >
                                    <Image
                                        src={project.katPlani.image}
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                        alt={project.katPlani.title}
                                    />
                                </div>
                                <div className="text-center mt-3">
                                    <p className="fw-bold text-muted">{project.katPlani.title}</p>
                                    <p className="small">Görüntüyü büyütmek için tıklayınız</p>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    
                    <Tab eventKey="uygulanmisHali" title="Uygulanmış Hali">
                        <div className="row mt-4">
                            {project.uygulanmisHali.map((image, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div 
                                        className="position-relative" 
                                        style={{ height: "250px", cursor: "pointer" }}
                                        onClick={() => handleOpenLightbox(index + 1)} // +1 because kat planı is first
                                    >
                                        <Image
                                            src={image.image}
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                            alt={image.title}
                                        />
                                    </div>
                                    <p className="mt-2 text-center">{image.title}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    
                    <Tab eventKey="genelOzellikler" title="Genel Özellikler">
                        <div className="row mt-4">
                            <div className="col-md-8 mx-auto">
                                <ul className="list-group">
                                    {project.genelOzellikler.map((ozellik, index) => (
                                        <li key={index} className="list-group-item">
                                            <i className="fas fa-check-circle me-2 text-success"></i>
                                            {ozellik}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>

            {/* Lightbox */}
            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                slides={allSlides}
                index={lightboxIndex}
            />
        </div>
    );
};

export default ProjectDetailsClient;
