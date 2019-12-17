import React, {useReducer} from 'react';
import axios from 'axios';

import {githubReducer} from "./gitgub.reducer";

import GithubContext from "./githubContext";
import ActionTypes from "../types";


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const API_URL = 'https://api.github.com/';
const QUERY_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export const GithubProvider = ({children}) => {
    const INITIAL_STATE = {
        user: {}, users: [], loading: false, repos: []
    };
    const [state, dispatch] = useReducer(githubReducer, INITIAL_STATE);
    const {user, users, loading, repos} = state;

    const searchUser = async searchItem => {
        setLoading();
        try {
            const resp = await axios.get(`${API_URL}search/users?q=${searchItem}&${QUERY_PARAMS}`);
            dispatch({
                type: ActionTypes.SEARCH_USERS,
                payload: resp.data.items
            })
        } catch (e) {
            console.log(e)
        }
    };

    const getUser = async name => {
        setLoading();
        try {
            const resp = await axios.get(`${API_URL}users/${name}?${QUERY_PARAMS}`);
            dispatch({
                type: ActionTypes.GET_USER,
                payload: resp.data
            })
        } catch (e) {
            console.log(e)
        }
    };

    const getRepos = async name => {
        setLoading();
        try {

        } catch (e) {
            const resp = await axios.get(`${API_URL}users/${name}/repos?per_page=5&${QUERY_PARAMS}`);
            dispatch({
                type: ActionTypes.GET_REPOS,
                payload: resp.data
            })
        }
    };

    const clearUsers = () => dispatch({type: ActionTypes.CLEAR_USERS});

    const setLoading = () => dispatch({type: ActionTypes.SET_LOADING});

    return (
        <GithubContext.Provider
            value={{searchUser, getUser, getRepos, clearUsers, setLoading, user, users, loading, repos}}>
            {children}
        </GithubContext.Provider>
    )
};
