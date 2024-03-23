import React from 'react';
import {Section} from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

import DATA from "../../../data/data.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const PostsHero = ({isDark}) => {
    const {
        posts,
        postsHero: { title, description, image }
    } = DATA;

    return (
        <Section
            title={title}
            description={description}
            isDark={isDark}
        >
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <Image
                        src={image}
                        alt="celik yapilar"
                        width={555}
                        height={370}
                        className="rounded-border shadow-primary"
                    />
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {
                        posts.map(({title: heroTitle, description, miniImage, href}) => {
                            return (
                                <div key={heroTitle} className="feature-block clearfix">
                                    <div className="feature-icon">
                                        <i className="icon-wallpaper">
                                            <Image
                                                src={miniImage}
                                                alt={heroTitle}
                                                width={92}
                                                height={92}
                                            />
                                        </i>
                                    </div>
                                    <div className="feature-content feature-block-inner">
                                        <h4>{heroTitle}</h4>
                                        <p>{description}</p>
                                        <Link href={href}>
                                            Detaylı Bilgi
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </Link>
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

export default PostsHero;