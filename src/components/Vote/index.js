import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { downvote_post, upvote_post } from '../../actions/actions';
import './index.css';

class Vote extends PureComponent{ 
    render()
    {
        const {
            id,
            votes,    
            upvote_post,
            downvote_post
        } = this.props;
        return(
            <div className="font-weight-bold">   
                <a onClick={() => upvote_post(id)}>   
                    <span className="fa fa-sort-up vote-glyphicon-blue" aria-hidden="true"></span>
                </a>
                <br/>
                {votes}
                <br/>  
                <a onClick={() => downvote_post(id)}>      
                    <span className="fa fa-sort-down vote-glyphicon-blue" aria-hidden="true"></span>
                </a>
            </div>
        )
    }
}

Vote.propTypes = {
    id: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
    upvote_post,
    downvote_post
}, dispatch);

export default connect(null, mapDispatchToProps)(Vote);
