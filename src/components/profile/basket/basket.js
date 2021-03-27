import React from 'react';
import styled from 'styled-components';
import BasketItem from './basketItems';
import { connect } from 'react-redux';
import { delBasket, handelShow } from '../../../redux/actions/actions';

const BasketContainer = styled.div`
    margin-top: 50px;

    & .basket-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        & .viwe-all {
            background: #FB9202;
            padding: 5px 10px;

            border: none;
            border-radius: 15px;

            font-size: 15px;
            color: #fff;

            cursor: pointer;

            &:focus {
                outline: none;
            }
        }
    }
`;

function Basket ({basketItems, handelShow, delBasket}) {

    const delItem = (id) => {
        delBasket(id)
    }
    
    return (
        <BasketContainer>
            <div className="basket-info">
                <h3>Order Menu</h3>
                <button onClick={() => handelShow('basket', basketItems)} className="viwe-all">Viwe All</button>
            </div>
            <div>
                {
                    basketItems.map((item, i) => i < 3 ? <BasketItem key={item._id} delBasket={delItem} params={item}/> : null)
                }
            </div>
        </BasketContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        basketItems: state.basket.menuItems
    }
}

const mapDispathToProps = {
    delBasket,
    handelShow
}

export default connect(mapStateToProps, mapDispathToProps)(Basket)