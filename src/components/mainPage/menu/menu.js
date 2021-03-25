import React from 'react';

import MenuItems from './menuItems';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { likeProduct, delLikeProduct, addBasket, addStillBasket } from '../../../redux/actions/actions';
import ModalWindow from '../../modalWindow';

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    h2 {
        margin-top: 50px;
    }
`;

function Menu ({menu, likeProduct, likedMenu, delLikeProduct, addBasket, basketItems, addStillBasket}) {
 

    const onLike = (id) => {
        if(likedMenu.find(item => item._id === id)){
            delLikeProduct(id);
            return;
        }

        likeProduct(id);
    }
    const handelActive = (id) => {
        if(likedMenu.find(items => items._id === id)){
            return true;
        }
        return false;
    }

    const addToBasket = (product, id) => {
        if (basketItems.find(item => item === product)) {
            addStillBasket(id);
            return;
        }
        addBasket(product);
    }

    if (menu.length === 0){
        return (
            <MenuContainer>
                <h2>Выберете продукт</h2>
            </MenuContainer>
        );
    }

    return (
        <MenuContainer>
            <ModalWindow />
            {
                menu.map((item, i) => i < 3 ? <MenuItems addBasket={addToBasket} handelActive={handelActive(item._id)} onLike={onLike} key={item._id} params={item} /> : null)
            }
        </MenuContainer>
    );
}


const mapStateToProps = (state) => {
    return {
        menu: state.menu.sort,
        likedMenu: state.menu.likedProduct,
        basketItems: state.basket.menuItems
    }
}

const mapDispathToProps = {
    likeProduct,
    delLikeProduct,
    addBasket,
    addStillBasket
}


export default connect(mapStateToProps, mapDispathToProps)(Menu);