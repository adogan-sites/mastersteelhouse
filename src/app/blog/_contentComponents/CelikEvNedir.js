import React from 'react';
import Image from 'next/image'

const CelikEvNedir = ({post}) => {
    return (
        <div className="col-md-9 col-sm-9 col-xs-12">
            <div className="blog-post">
                <Image
                    src="/images/services/konut.png"
                    alt="blog-img"
                    width={848}
                    height={449}
                />
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
    );
};

export default CelikEvNedir;