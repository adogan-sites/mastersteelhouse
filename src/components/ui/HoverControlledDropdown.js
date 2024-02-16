'use client'

import React, {useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

const HoverControlledDropdown = ({children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <NavDropdown
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onToggle={() => setIsClicked(!isClicked)}
            show={props.show || isClicked || isHovered}
        >
            {children}
        </NavDropdown>
    );
};

export default HoverControlledDropdown;