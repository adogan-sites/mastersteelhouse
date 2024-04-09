import React from 'react';

const Section = ({
     title,
     isH1Title,
     description,
    isDark,
     children
 }) => {
    return (
        <div className={isDark ? "section-block-grey" : "section-block"}>
            <div className="container">
                <div className="section-heading center-holder">
                    {
                        isH1Title
                            ? <h1>{title}</h1>
                            : <h2>{title}</h2>
                    }
                    {description && <p>{description}</p>}
                </div>
                {children}
            </div>
        </div>
    );
};

export default Section;