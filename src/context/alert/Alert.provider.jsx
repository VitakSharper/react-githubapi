import React, {useReducer} from 'react'
import {AlertContext} from './alertContext'
import {alertReducer} from './alertReducer'
import ActionTypes from "../types";

export const AlertProvider = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => dispatch({type: ActionTypes.HIDE_ALERT});

    const show = (text, type = 'secondary') => {
        dispatch({
            type: ActionTypes.SHOW_ALERT,
            payload: {type, text}
        })
    };

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
};
