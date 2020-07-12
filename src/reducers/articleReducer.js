import { RECEIVE_ARTICLE } from '../actions';

export default function articleReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ARTICLE:
            return action.article;
        case UPDATE_ARTICLE:
            return {
                id: action.id,
                status: action.payload.created_at,
                created_at: action.payload.created_at,
            }
        default:
            return state;
    }
};