'use client'

import React, {useEffect, useState} from 'react';
import Link from 'next/link'

import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import Navbar from 'react-bootstrap/Navbar'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {HoverControlledDropdown} from "@/components/ui";
import {usePathname} from "next/navigation";

import DATA from "../../../data/data.json";
import Image from "next/image";

const NavBar = () => {
    const pathname = usePathname();

    const [collapseMenu, setCollapseMenu] = useState();

    const {menu} = DATA;

    useEffect(() => {
        setCollapseMenu();
        global.window.scrollTo(0,0);
    }, [pathname]);

    return (
        <Navbar className="navbar-default navbar-custom" sticky="top" data-offset-top="50" expand="md">
            <Container>
                <Row className="flex-fill align-items-center">
                    <Col xs={2} className='navbar-header navbar-header-custom'>
                        <Link scroll={false} href="/">
                            <Image
                                loading='eager'
                                width="168"
                                height="70"
                                src="/images/logo-dark.webp"
                                alt="header-logo"
                            />
                        </Link>
                        <NavbarToggle aria-controls="bs-example-navbar-collapse-1" className="menu-icon" onClick={() => setCollapseMenu(prev => !prev)}/>
                    </Col>
                    <Col>
                        <NavbarCollapse id="bs-example-navbar-collapse-1" className="justify-content-end" in={collapseMenu}>
                            <Nav as="ul" className="nav navbar-nav navbar-right navbar-links-custom flex-nowrap" navbarScroll>
                                {
                                    menu.map(item => {
                                        const {name, href, target, children, align} = item;
                                        if (children) {
                                            return (
                                                <HoverControlledDropdown
                                                    key={`menu-${name}`}
                                                    as="li"
                                                    title={name}
                                                    className={(pathname === href) || children.map(c => c.href).includes(pathname) ? 'active-link' : ''}
                                                    align={align}
                                                    autoClose={false}
                                                    item={item}
                                                />
                                            )
                                        } else {
                                            return (
                                                <NavItem key={`menu-${name}`} as="li"
                                                         className={pathname === href ? 'active-link' : ''}>
                                                    <Link
                                                        scroll={false}
                                                        href={href}
                                                        className="nav-link"
                                                        target={target}
                                                    >
                                                        {name}
                                                    </Link>
                                                </NavItem>
                                            )
                                        }
                                    })
                                }
                            </Nav>
                        </NavbarCollapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;
