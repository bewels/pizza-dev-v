import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {handelHide, delBasket, addBasket, addStillBasket} from '../../redux/actions/actions'
import MenuItems from '../mainPage/menu/menuItems';
import BasketItem from '../profile/basket/basketItems/basketItems';

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    display: flex;
    align-items: center;
    flex-direction: column;

    width: 800px;
    height: 500px;
    background: #fff;
    padding: 50px;

    border: 2px solid #FB9202;
    border-radius: 5px;

    overflow-y: auto;

    & .modal-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        & i {
            font-size: 30px;

            cursor: pointer;
        }
    }

`

function ModalWindow ({handelHide, show, name, basketItems, menu, delBasket, addBasket, addStillBasket}) {

    if (!show) return null;

    const closeModal = () => {
        handelHide()
    }

    const delItem = (id) => {
        delBasket(id)
    }

    const addToBasket = (product, id) => {
        if (basketItems.find(item => item === product)) {
            addStillBasket(id);
            return;
        }
        addBasket(product);
    }


    const cangeForModal = name === 'menu' ? menu : basketItems 
    return (
        <ModalContainer>
            <div className="modal-info">
                <h3>Your {name}</h3>
                <i onClick={closeModal} className="bi bi-x"></i>
            </div>
            <div>
                {
                    cangeForModal.map(item => name === 'basket' ? <BasketItem key={item._id} delBasket={delItem} params={item} /> : <MenuItems addBasket={addToBasket} key={item._id} params={item}/>)
                }
            </div>
        </ModalContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        show: state.client.show,
        name: state.client.name,
        basketItems: state.basket.menuItems,
        menu: state.menu.menuItems
    }
}

const mapDispathToProps = {
    handelHide,
    delBasket,
    addBasket,
    addStillBasket
}

export default connect(mapStateToProps, mapDispathToProps)(ModalWindow)