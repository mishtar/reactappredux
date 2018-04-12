import { createStore } from 'redux';
import data from '../assets/data/post.json';
import { 
    DOWNVOTED_POST, 
    SORT_ASCENDING, 
    SORT_DESCENDING, 
    UPVOTED_POST 
} from  '../actions/actions.js';

const initialState = { posts: data, order: 0};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case DOWNVOTED_POST:
            return {
                ...state,
                posts: state.posts.map(
                    (element) => element.id === action.payload
                    ? {...element, votes: (element.votes-1)}
                    : element)
            };
        case UPVOTED_POST:
            return {
                ...state,
                posts: state.posts.map(
                    (element) => element.id === action.payload
                    ? {...element, votes: (element.votes+1)}
                    : element)
            };
        case SORT_ASCENDING:
            return {
                ...state,
                order: 1 
            };
        case SORT_DESCENDING:
            return {
                ...state,
                order: 0 
            };
        default:
            return state;
    }
}

export default createStore(reducer, initialState);
