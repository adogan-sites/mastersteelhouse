'use client'

import React, {useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

const HoverControlledDropdown = ({children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavDropdown
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            show={props.show || isHovered}
        >
            {children}
        </NavDropdown>
    );
};

export default HoverControlledDropdown;