import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";


export default function Link ({ page, selectedPage, setSelectedPage }) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    return (
        <AnchorLink href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? 'text-purple-300' : ''} transition duration-500 hover:text-purple-100`}>
            {page}
        </AnchorLink>
    );
}

Link.propTypes = {
    selectedPage: PropTypes.oneOf(Object.values(SelectedPage)).isRequired,
    setSelectedPage: PropTypes.func.isRequired,
    page: PropTypes.string.isRequired,    
}