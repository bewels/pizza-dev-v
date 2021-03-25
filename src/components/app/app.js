import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navigation from '../navigation';
import MainPage from '../mainPage';
import Profile from '../profile';
import LikedPage from '../likedPage';

import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr 2fr;
`;


export default function App () {
    return (
        <Router>
            <Container>
                <Navigation />
                <Switch>
                    <Route exact path="/home"><MainPage/></Route>
                    <Route exact path="/liked"><LikedPage/></Route>
                    <Route exact><MainPage/></Route>
                </Switch> 
                <Profile />
            </Container>
        </Router>
    );
}