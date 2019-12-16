import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {AlertProvider} from "./context/alert/Alert.provider";
import {GithubProvider} from "./context/github/Github.provider";

const app = (
    <GithubProvider>
        <AlertProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AlertProvider>
    </GithubProvider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
