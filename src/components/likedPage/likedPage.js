import React from 'react';
import { connect } from 'react-redux';

import {delLikeProduct} from '../../redux/actions/actions'

import MenuItems from '../mainPage/menu/menuItems';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;

    background: #FAFAFC;
    color: #3B3B47;

    padding: 50px;

    
    & .items-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        min-height: 100%;


        border-radius: 20px;

        padding: 50px;
        gap: 20px;

        overflow-y: auto;

        h3 {
            opacity: .8;
        }
    }
`;


function LikedPage ({likedProduct, delLikeProduct}) {
    const delLike = (e, id) => {
        delLikeProduct(id)
    }

    return (
        <Container>
            <h2>Liked list ❤</h2>
            <div className="items-container">
                {
                    likedProduct.length > 0 ? likedProduct.map(item => <MenuItems key={likedProduct.id + 1}  onLike={delLike} params={item} />) : <h3>You didn't like anything😰</h3>
                }
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        likedProduct: state.menu.likedProduct
    }
}

const mapDispathToProps = {
    delLikeProduct
}

export default connect(mapStateToProps, mapDispathToProps)(LikedPage)