import React from 'react';
import Link from "next/link";
import Image from "next/image";

import {Section} from "@/components/ui";

import DATA from '../../data/data.json';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogPosts = () => {
    const { posts } = DATA;
    return (
        <Section
            title='Son Yazılar'
            description='Hafif çelik ve hafif çelik yapıları hakkında sık sorulan sorular, merak edilenler ve güncel gelişmeler hakkındaki yazılarımız.'
        >
            <div className="row">
                {
                    posts.map(({
                       title,
                       herodescription,
                       image,
                       href
                    }) => (
                        <div key={title} className="col-md-4 col-sm-4 col-xs-12">
                            <div className="blog-grid">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={358}
                                    height={238}
                                />
                                <div className="blog-inner">
                                    <h4>{title}</h4>
                                    <p>{herodescription}</p>
                                    <Link href={href}>
                                        Detaylı Bilgi
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Section>
    );
};

export default BlogPosts;