import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import GithubContext from "../context/github/githubContext";

export const Search = () => {
    const {show} = useContext(AlertContext);
    const {searchUser} = useContext(GithubContext);
    const [searchValue, setSearchValue] = useState('');

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return;
        }
        if (searchValue.trim()) {
            searchUser(searchValue)
        } else {
            show('Enter user data')
        }
    };

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Введите ник пользователя..."
                onKeyPress={onSubmit}
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
            />
        </div>
    )
};
