import React, { useState } from 'react';

import styled from 'styled-components';

const GreetingContainer = styled.div`
    position: relative;

    width: 100%;
    min-height: 237px;

    display: flex;
    justify-content: center;
    flex-direction: column;

    background: #FFECD1;    

    border-radius: 25px;

    padding: 0 65px;
    margin-top: 20px;

    font-size: 20px;

    overflow: hidden;

    &::before{
        content: '';

        position: absolute;
        top: -50%;
        right: 10%;

        width: 100px;
        height: 100px;

        border-radius: 50%;
        border: 40px solid #00A650;
    }
    &::after{
        content: '';

        position: absolute;
        bottom: -50%;
        left: 50%;

        width: 100px;
        height: 100px;

        border-radius: 50%;
        border: 40px solid #00AEC7;
    }

    span {
        color: #B2A89C;
        font-weight: 600;
        span {
            color: #FC9304;
        }
    }
    button {
        background: #FC9304;

        border: none;
        border-radius: 50px;

        color: #fff;
        font-family: inherit;
        font-weight: 600;

        width: 15%;
        padding: 15px 5px;
        margin-top: 20px;

        cursor: pointer;

        &:focus{
            outline: none;
        }
    }
`;

export default function Greeting () {
    const [modal, setModal] = useState(false)

    const onModal = () => {
        setModal(!modal)
    }

    if (modal) {
        return (
            <GreetingContainer>
                <span>More Text</span>
                <button onClick={onModal}>Close</button>
            </GreetingContainer>
        );
    }

    return (
        <GreetingContainer>
            <h2>Hello Ilya,</h2>
            <span>Get free delivery every <span>$20</span> purchase</span>
            <button onClick={onModal}>Learn More</button>
        </GreetingContainer>
    );

}
