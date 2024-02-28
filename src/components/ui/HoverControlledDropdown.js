'use client'

import React, {useEffect, useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {useMediaQuery} from "react-responsive";

const HoverControlledDropdown = ({
    item,
    ...props
}) => {
    const [isOpened, setIsOpened] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const handleDropdownToggleClick = ({ event }) => {
        if (isMobile) {
            setIsOpened(prev => !prev);
            return;
        }

        if (item.href && event.target.classList.contains('dropdown-toggle')) {
            router.push(item.href);
            setIsOpened(false);
        }
    };

    const handleItemClick = () => {
        setIsOpened(false);
    };

    useEffect(() => {
        setIsOpened(false);
    }, [pathname]);

    return (
        <NavDropdown
            {...props}
            onClick={event => handleDropdownToggleClick({ event })}
            onMouseEnter={() => !isMobile && setIsOpened(true)}
            onMouseLeave={() => !isMobile && setIsOpened(false)}
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
                            <Link scroll={false} href={childItem.href} className="nav-link text-wrap">
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