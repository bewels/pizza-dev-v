import React, { useEffect } from 'react';


import Header from './header';
import Greeting from './greeting';
import MenuCategory from './menuCategory';
import Menu from './menu';
import Spiner from '../spinner';
import Error from '../error';
import {onLoadedMenu, onError, onLoadedCategory} from '../../redux/actions/actions';
import PizzaService from '../../service/service';

import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
    height: 100vh;

    background: #FAFAFC;
    color: #3B3B47;

    padding: 50px;

    &.status {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


function MainPage ({loading, error, onLoadedMenu, onError, onLoadedCategory}) {
    const result = new PizzaService();
    
    useEffect(() => {
        result.getMenu().then(res => onLoadedMenu(res))
        result.getCategory().then(res => onLoadedCategory(res))
    }, []);


    if(error) {
        return (
            <Container className="status">
                <Error />
            </Container>
        )
    }

    if (loading) {
        return (
            <Container className="status">
                    <Spiner />
            </Container>
        );
    }

    return (
        <Container>
            <Header />
            <Greeting />
            <MenuCategory />
            <Menu />
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        serviceParam: state.menu,
        loading: state.menu.loading,
        error: state.menu.error,
        likedMenu: state.menu.likedProduct
    }
}

const mapDispathToProps = {
    onLoadedMenu,
    onLoadedCategory,
    onError
}

export default connect(mapStateToProps, mapDispathToProps)(MainPage)