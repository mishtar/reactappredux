import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sort_ascending, sort_descending } from '../../actions/actions';
import Post from '../Post';
import Button from '../Button';
import './index.css';

class PostList extends Component {
    render(){
        const {
            posts,
            order,
            sort_ascending,
            sort_descending
        } = this.props;
        return(
            <div>
                Orden:{' '}
                <Button color="primary" className="post-list-button" active={order===1} onClick={sort_ascending} outline><div>Ascendente</div></Button>{' '}
                <Button color="primary" className="post-list-button" active={order===0} onClick={sort_descending} outline><div>Descendente</div></Button>{' '}
                {posts && posts
                    .sort(order ? (a, b) => parseInt(a.votes, 10) - parseInt(b.votes, 10) : (a, b) => parseInt(b.votes, 10) - parseInt(a.votes, 10))
                    .map((element) => (
                        <Post {...element} key={element.id} id={element.id} />
                ))}
            </div>
        )      
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    order: state.order
});

const mapDispatchToProps = dispatch => bindActionCreators({
    sort_ascending,
    sort_descending
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);