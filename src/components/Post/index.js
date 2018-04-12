import React from 'react';
import PropTypes from 'prop-types';
import {Col,Row} from 'reactstrap';
import Link from '../LinkComponent';
import Vote from '../Vote';
import './index.css';

const Post = ({description, id, post_image_url, title, url, votes, writer_avatar_url}) => (
    <Row className="post-row">
        <Col xs="3">
            <img className="post-image" src={post_image_url} alt={title} />
        </Col>
        <Col xs="1">
            <Vote id={id} votes={votes} />
        </Col>
        <Col xs="5">
            <Link url={url} title={title}><div>{title}</div></Link>
            <div className="text-black">{description}</div>
            <div className="text-muted">
                Escrito por:{' '}
                <img src={writer_avatar_url} alt="author" className="rounded-circle post-author-image" />
            </div>
        </Col>
        <Col xs="3" />
    </Row>
);

Post.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    post_image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    writer_avatar_url: PropTypes.string.isRequired
};

export default Post;