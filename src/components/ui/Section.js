import React from 'react';

const Section = ({
     title,
     description,
    isDark,
     children
 }) => {
    return (
        <div className={isDark ? "section-block-grey" : "section-block"}>
            <div className="container">
                <div className="section-heading center-holder">
                    <h2>{title}</h2>
                    {description && <p>{description}</p>}
                </div>
                {children}
            </div>
        </div>
    );
};

export default Section;