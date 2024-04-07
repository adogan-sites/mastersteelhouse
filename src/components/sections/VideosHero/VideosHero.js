"use client"

import React from 'react';
import Col from "react-bootstrap/Col";
import Youtube from "react-lazyload-youtube";
import 'react-lazyload-youtube/dist/index.css'

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
                    videos.map(videoID => (
                        <Col
                            key={videoID}
                            md={videos.length > 1 ? 6 : 12}
                            className="my-3"
                        >
                            <Youtube
                                width="100%"
                                height="315px"
                                videoId={videoID}
                                imgSize="hqdefault"
                            />
                        </Col>
                    ))
                }
            </div>
        </Section>
    );
};

export default VideosHero;