import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Navbar from "./components/Navbar.components";

import HomePage from "./pages/Home/HomePage.component";
import AboutPage from "./pages/About/AboutPage.component";
import ProfilePage from "./pages/Profile/ProfilePage.component";
import {Alert} from './components/Alert'

function App() {
    return (
        <>
            <Navbar/>
            <div className="container pt-4">
                <Alert alert={{text: 'Test alert'}}/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/profile/:name" component={ProfilePage}/>
                </Switch>
            </div>
        </>
    );
}

export default App;
