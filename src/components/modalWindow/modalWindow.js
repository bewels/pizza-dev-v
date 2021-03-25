import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {handelHide, delBasket} from '../../redux/actions/actions'
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

function ModalWindow ({handelHide, show, name, items, delBasket}) {

    if (!show) return null;

    const closeModal = () => {
        handelHide()
    }

    const delItem = (id) => {
        delBasket(id)
    }
    return (
        <ModalContainer>
            <div className="modal-info">
                <h3>Your {name}</h3>
                <i onClick={closeModal} className="bi bi-x"></i>
            </div>
            <div>
                {
                    items.map(item => name === 'basket' ? <BasketItem key={item._id} delBasket={delItem} params={item} /> : <MenuItems key={item._id} params={item}/>)
                }
            </div>
        </ModalContainer>
    );
}

const mapStateToProps = (state) => {

    return {
        show: state.client.show,
        name: state.client.name,
        items: state.client.items
    }
}

const mapDispathToProps = {
    handelHide,
    delBasket
}

export default connect(mapStateToProps, mapDispathToProps)(ModalWindow)