import React from 'react';
import {Section} from "@/components/ui";
import Link from "next/link";

import DATA from "../../../data/data.json";

const PostsHero = () => {
    const { posts, title, description } = DATA.postsHero;

    return (
        <Section
            title={title}
            description={description}
        >
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <img src="http://via.placeholder.com/555x370" className="rounded-border shadow-primary" alt="team"/>
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">
                    {
                        posts.map(({title, description, image, href}) => {
                            return (
                                <div key={title} className="feature-block clearfix">
                                    <div className="feature-icon">
                                        <i className="icon-wallpaper"></i>
                                    </div>
                                    <div className="feature-content feature-block-inner">
                                        <h4>{title}</h4>
                                        <p>{description}</p>
                                        <Link href={href}>Read More...</Link>
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