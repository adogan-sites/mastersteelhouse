'use client'

import React, {useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

const HoverControlledDropdown = ({
    item,
    ...props
}) => {
    const [isOpened, setIsOpened] = useState(false);

    const pathname = usePathname();
    const router = useRouter()

    const handleDropdownToggleClick = ({ event }) => {
        if (item.href && event.target.classList.contains('dropdown-toggle')) {
            router.push(item.href);
            setIsOpened(false);
        }
    };

    const handleItemClick = () => {
        setIsOpened(false);
    };

    return (
        <NavDropdown
            {...props}
            onClick={event => handleDropdownToggleClick({ event })}
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
            show={props.show || isOpened}
        >
            {
                item.children.map(childItem => {
                    return (
                        <NavDropdown.Item
                            as="div"
                            key={`menu-${item.name}-${childItem.name}`}
                            className={(pathname === childItem.href) ? 'active-link' : ''}
                            onClick={handleItemClick}
                        >
                            <Link scroll={false} href={childItem.href} className="nav-link">
                                {childItem.name}
                            </Link>
                        </NavDropdown.Item>
                    )
                })
            }
        </NavDropdown>
    );
};

export default HoverControlledDropdown;