import React from 'react';
import {Button as BootstrapButton} from 'reactstrap';
import PropTypes from 'prop-types';

const Button = ({ active, color, children, onClick, outline }) => (
    <BootstrapButton active={active} outline={outline} color={color} onClick={onClick}>
        {children}
    </BootstrapButton>
);

Button.propTypes = {
    active: PropTypes.bool,
    color: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    outline: PropTypes.bool
};

Button.defaultProps = {
    onClick: null,
    outline: false
};

export default Button;

