import React, {Component} from 'react';
import Post from '../Post';
import Button from '../Button';
import data from '../../assets/data/post.json';
import './index.css';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: data,
            order: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleVotesClick = this.handleVotesClick.bind(this);
    }
    handleClick(order) {
        this.setState({order:order});
    }
    handleVotesClick(isUpButton, id) {
        this.setState({posts: this.state.posts.map(
            (element) => element.id === id
            ? {...element, votes: isUpButton ? (element.votes+1) : (element.votes-1)}
            : element
        )});
    }
    render(){
        return(
            <div>
                Orden:{' '}
                <Button color="primary" className="post-list-button" active={this.state.order===1} onClick={() => this.handleClick(1)} outline><div>Ascendente</div></Button>{' '}
                <Button color="primary" className="post-list-button" active={this.state.order===0} onClick={() => this.handleClick(0)} outline><div>Descendente</div></Button>{' '}
                {this.state.posts
                    .sort(this.state.order ? (a, b) => parseInt(a.votes, 10) - parseInt(b.votes, 10) : (a, b) => parseInt(b.votes, 10) - parseInt(a.votes, 10))
                    .map((element) => (
                        <Post {...element} key={element.id} onClickDown={() => this.handleVotesClick(false, element.id)} onClickUp={() => this.handleVotesClick(true, element.id)} />
                ))}
            </div>
        )      
    }
}

export default PostList;