'use client'

import React from 'react';
import Link from 'next/link'

import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {HoverControlledDropdown} from "@/components/ui";
import {usePathname, useRouter} from "next/navigation";

const MENU_CONFIG = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkimizda', href: '/hakkimizda' },
    {
        name: 'Hizmetler', href: '/hizmetler', align: 'start',
        children: [
            { name: 'Konut', href: '/konut' },
            { name: 'Villa', href: '/villa' },
            { name: 'Ofis', href: '/ofis' },
            { name: 'Tiny House', href: '/tiny-house' },
            { name: 'Bungalov', href: '/bungalov' }
        ]
    },
    {
        name: 'Nedir?', href: '/nedir', align: 'end',
        children: [
            { name: 'Çelik Ev Nedir?', href: '/celik-ev-nedir' },
            { name: 'Çelik Yapıların Avantajı Nedir?', href: '/celik-yapilarin-avantaji-nedir' },
            { name: 'Prefabrik ve Çelik Evlerin Farkı Nedir?', href: '/prefabrik-ve–celik-evlerin–farki-nedir' },
            { name: 'Neden Master Steel House?', href: '/neden-master-steel-house' },
            { name: 'Hafif Çelik Profil Nedir ve Neden Tercih Ediliyor?', href: '/hafif-celik-profil-nedir-ve-neden-tercih-ediliyor' },
            { name: 'Diğer İnşaat Malzemelerine Göre Nasıl Karşılaştırılır?', href: '/diger-i̇nsaat-malzemelerine-gore-nasil-karsilaştirilir' },
        ]
    },
    { name: 'Iletisim', href: '/iletisim' },
];

const NavBar = () => {
    const pathname = usePathname();
    const router = useRouter()

    const handleDropdownToggleClick = ({ event, href }) => {
        if (href && event.target.classList.contains('dropdown-toggle')) {
            router.push(href);
        }
    };

    return (
        <header>
            <Navbar className="navbar-default navbar-custom" sticky="top" data-offset-top="50" expand="md">
                <Container>
                    <Row className="flex-fill">
                        <Col xs={2} className='navbar-header navbar-header-custom'>
                            <NavbarBrand href="index.html">
                                MASTER STEEL HOUSE
                            </NavbarBrand>
                            <NavbarToggle aria-controls="bs-example-navbar-collapse-1" className="menu-icon"/>
                        </Col>
                        <Col>
                            <NavbarCollapse id="bs-example-navbar-collapse-1" className="justify-content-end">
                                <Nav as="ul" className="nav navbar-nav navbar-right navbar-links-custom">
                                    {
                                        MENU_CONFIG.map(({ name, href, children, align }) => {
                                            if (children) {
                                                return (
                                                    <HoverControlledDropdown
                                                        key={name}
                                                        as="li"
                                                        title={name}
                                                        className={(pathname === href) || children.map(c => `${href}${c.href}`).includes(pathname) ? 'active-link' : ''}
                                                        onClick={event => handleDropdownToggleClick({ href, event })}
                                                        align={align}
                                                    >
                                                        {
                                                            children.map(childItem => {
                                                                return (
                                                                    <NavDropdown.Item as="div" key={name} className={(pathname === `${href}${childItem.href}`) ? 'active-link' : ''}>
                                                                        <Link href={`${href}${childItem.href}`} className="nav-link">
                                                                            {childItem.name}
                                                                        </Link>
                                                                    </NavDropdown.Item>
                                                                )
                                                            })
                                                        }
                                                    </HoverControlledDropdown>
                                                )
                                            } else {
                                                return (
                                                    <NavItem key={name} as="li" className={pathname === href ? 'active-link' : ''}>
                                                        <Link href={href} className="nav-link">
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
        </header>
    );
};

export default NavBar;