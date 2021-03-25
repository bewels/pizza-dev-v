import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        border: none;
        border-radius: 50px;

        padding: 20px 40px;

        &:focus {
            outline: none;
        }
    }
`;

export default function Header () {
    return (
        <HeaderContainer>
            <h1>Today Menu 😛</h1>
            <input type="text" placeholder="Search by food name"/>
        </HeaderContainer>
    );
}