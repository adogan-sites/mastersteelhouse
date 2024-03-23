import React from 'react';
import Col from "react-bootstrap/Col";

import {Section} from "@/components/ui";

import DATA from "../../../data/data.json";

const VideosHero = ({isDark}) => {
    const {
        title,
        description,
        videos
    } = DATA.videosHero;

    return (
        <Section
            title={title}
            description={description}
            isDark={isDark}
        >
            <div className="row">
                {
                    videos.map(videoUrl => (
                        <Col
                            key={videoUrl}
                            md={videos.length > 1 ? 6 : 12}
                        >
                            <iframe
                                width="100%"
                                height="315"
                                src={videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </Col>
                    ))
                }
            </div>
        </Section>
    );
};

export default VideosHero;