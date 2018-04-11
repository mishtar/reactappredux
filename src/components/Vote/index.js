import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Vote = ({onClickDown, onClickUp, votes}) => (
    <div className="font-weight-bold">   
        <a onClick={onClickUp}>   
            <span className="fa fa-sort-up vote-glyphicon-blue" aria-hidden="true"></span>
        </a>
        <br/>
        {votes}
        <br/>  
        <a onClick={onClickDown}>      
            <span className="fa fa-sort-down vote-glyphicon-blue" aria-hidden="true"></span>
        </a>
    </div>
);

Vote.propTypes = {
    onClick: PropTypes.func,
    votes: PropTypes.number.isRequired
};

Vote.defaultProps = {
    onClickDown: null,
    onClickUp: null
}

export default Vote;