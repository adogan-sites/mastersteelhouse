import React from 'react';
import {notFound} from 'next/navigation'

import DATA from "../../../data/data.json";

export const generateStaticParams = () => {
    const posts = DATA.menu.find(m => m.href === "/blog").children;

    return posts.map((post) => ({
        post: post.href.split('/').pop(),
    }))
}

const Post = ({params}) => {
    const {post} = params;

    if (post === "asdasd") {
        return notFound();
    }

    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-9 col-xs-12">
                        <div className="blog-post">
                            <img src="http://via.placeholder.com/848x449" alt="blog-img"/>
                            <h4>Methodology of road traffic crash</h4>
                            <div className="blog-post-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget libero at justo
                                    euismod ullamcorper nec vitae velit. Aliquam erat volutpat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget libero at justo
                                    euismod ullamcorper nec vitae velit. Aliquam erat volutpat. Nullam accumsan lorem
                                    erat, nec porta erat mattis nec. Nam convallis vehicula purus eget tempor. Nulla
                                    porttitor ex ut odio ultricies, id commodo nibh rhoncus. In mattis scelerisque magna
                                    eu porttitor. Nulla ac laoreet nulla, at vehicula ante. Sed eget orci id ligula
                                    venenatis lobortis sit amet ut purus. Morbi sem enim, lacinia vitae nibh vel,
                                    faucibus vestibulum sapien. Aenean sit amet elementum justo. Fusce blandit nisl
                                    quam, fringilla ultricies ligula efficitur non. Nunc sit amet ex at felis
                                    pellentesque dictum. Nunc molestie vehicula ligula. Maecenas faucibus tortor sit
                                    amet nisl luctus, ac volutpat lectus ultrices.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget libero at justo
                                    euismod ullamcorper nec vitae velit. Aliquam erat volutpat. Nullam accumsan lorem
                                    erat, nec porta erat mattis nec. Nam convallis vehicula purus eget tempor. Nulla
                                    porttitor ex ut odio ultricies, id commodo nibh rhoncus. In mattis scelerisque magna
                                    eu porttitor. Nulla ac laoreet nulla, at vehicula ante.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
