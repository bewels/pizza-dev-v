import React from 'react';

import styled from 'styled-components';


const MenuItems = styled.div`
    position: relative;

    width: 360px;
    height: 280px;

    background: #fff;

    border-radius: 20px;

    margin-top: 20px;
    padding: 10px 30px;
    .product-items{
        position: relative;

        width: 100%;
        height: 60%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        i {
            color: #FF3636;
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 0;
            right: 0;
            z-index: 9;

            height: 35px; 
            width: 35px;

            border-radius: 50%;
            transition: background .2s linear;
        }
        .active{
            background: rgba(256, 100, 100, .5);
        }
    }
    .product-info{
        display: flex;
        flex-direction: column;

        margin-top: 20px;

        span {
            font-weight: 700;
            font-size: 20px;

            span{
                color: #FB9300;
            }
        }
    }
    button{
        position: absolute;
        right: 10%;
        bottom: 10%;

        width: 50px;
        height: 50px;

        background: #FB9202;

        border: none;
        border-radius: 50%;

        font-size: 30px;
        color: #fff;

        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`;

export default function Menu ({params, onLike, handelActive, addBasket}) {
    return (
        
        <MenuItems>
            <div className="product-items">
                <img src={params.url} alt={params.title} />
                <div className={handelActive ? 'active' : null} onClick={() => onLike(params._id)}>
                    <i className="bi bi-heart-fill"></i>
                </div>
            </div>
            <div className="product-info">
                <span>{params.title}</span>
                <span><span>$</span>{params.price}</span>
            </div>
            <button onClick={() => addBasket(params, params._id)}><i className="bi bi-plus"></i></button>
        </MenuItems>
    );
}