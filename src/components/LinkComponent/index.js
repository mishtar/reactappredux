import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

// Example of high order function
const Link = ({children, title, url}) => (
    <a href={url} className="link-url" target="_blank" title={title}>
        {children}
    </a>
);

Link.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};

export default Link;