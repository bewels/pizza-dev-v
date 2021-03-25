import React from 'react';

import styled from 'styled-components'
import ProfileHeader from './profileHeader';
import Card from './card/card';
import Basket from './basket/basket';

const Container = styled.div`
    height: 100vh;
    background: #fff;
    padding: 50px;
`

export default function Profile () {
    return (
        <Container>
            <ProfileHeader />
            <Card />
            <Basket />
        </Container>
    );
}