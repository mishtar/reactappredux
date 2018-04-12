export const DOWNVOTED_POST = 'DOWNVOTED_POST';
export const downvote_post = id => {
    return {
        type: DOWNVOTED_POST,
        payload: id
    }
};

export const UPVOTED_POST = 'UPVOTED_POST';
export const upvote_post = id => {
    return {
        type: UPVOTED_POST,
        payload: id
    }
};

export const SORT_ASCENDING = 'SORT_ASCENDING';
export const sort_ascending = () => {
    return {
        type: SORT_ASCENDING
    }
}

export const SORT_DESCENDING = 'SORT_DESCENDING';
export const sort_descending = () => {
    return {
        type: SORT_DESCENDING
    }
};
