import React from 'react';
import styled from 'styled-components';

const BasketItemContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    justify-items: center;
    align-items: center;

    width: 100%;
    height: 100px;
    margin-top: 20px;
    padding: 5px;

    font-weight: 700;

    

    & .item-img {
        width: 80%;
        height: 100px;
        padding: 5px;

        background: #FFECD0;

        border-radius: 20px;


        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    & .item-params {
        display: flex;
        flex-direction: column;
    }

    .orange{
        color: #FB9300;
    }

    & .item-price {
        display: flex;
        align-items:center;
        & i {
            font-size: 25px;

            cursor: pointer;
        }
    }
`;

export default function BasketItem ({params, delBasket}) {
    const {url, category, title, price, count, _id} = params
    return (
        <BasketItemContainer>
            <div className="item-img">
                <img src={url} alt={category}/> 
            </div>
            <div className="item-params">
                <span>{title}</span>
            <span><span className="orange">x</span>{count}</span>
            </div>
            <div className="item-price">
                <span className="prise"><span className="orange">$</span>{price}</span>
                <i onClick={() => delBasket(_id)} className="bi bi-x"></i>
            </div>
        </BasketItemContainer>
    );
}