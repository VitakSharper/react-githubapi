import ActionTypes from "../types";

const handlers = {
    [ActionTypes.SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [ActionTypes.GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
    [ActionTypes.GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [ActionTypes.SET_LOADING]: (state) => ({...state, loading: true}),
    [ActionTypes.CLEAR_USERS]: (state) => ({...state, users: []}),
    DEFAULT: state => state
};

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
