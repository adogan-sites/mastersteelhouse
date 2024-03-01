'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

import DATA from "../../../data/data.json";
const findPageFromMenuByPathname = (
    targetPathname,
    currentMenuPath,
    menu,
    pageStack
) => {
    for (let i = 0; i < menu.length; i++) {
        const item = menu[i];
        if (item.href === targetPathname) {
            pageStack.push(item);
            return pageStack;
        }
        if (item.children) {
            pageStack.push(item);
            const foundItem = findPageFromMenuByPathname(targetPathname, item.href, item.children, pageStack);
            if (foundItem) {
                return pageStack;
            }
            pageStack.pop();
        }
    }
};

const PageTitle = () => {
    const {menu} = DATA;
    const pathname = usePathname();
    const pageStack = findPageFromMenuByPathname(
        pathname,
        "",
        menu,
        [menu[0]]
    );

    return pathname === "/" || !pageStack
        ? null
        : (
            <div
                className="page-title"
                style={{
                    backgroundImage: "url(/images/carousel/homePic1.webp)",
                    textShadow: "rgba(28, 48, 62, 0.6) 0px 1px 8px"
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <h1>{pageStack[pageStack.length - 1].name}</h1>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <ul>
                                {
                                    pageStack.map(({name, href}) => (
                                        <li key={name}><Link scroll={false} href={href}>{name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default PageTitle;
