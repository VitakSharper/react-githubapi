import ActionTypes from '../types'

const handlers = {
    [ActionTypes.SHOW_ALERT]: (state, action) => action.payload,
    [ActionTypes.HIDE_ALERT]: () => null,
    DEFAULT: state => state
};

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action)
};
