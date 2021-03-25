import React from 'react';
import styled from 'styled-components';

const CargContainer = styled.div`
    & .card {
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 2fr 1fr;
        justify-items: space-between;

        width: 100%;
        height: 225px;

        background: #FB9300;
        margin-top: 50px;
        padding: 30px;

        color: #fff;

        border-radius: 30px;

        opacity: .8;

        backdrop-filter: blur(20px);
    }
`;

export default function Card () {
    return (
        <CargContainer>
            <div className="card">
                <span className="card-name">Debit-card</span>
                <span className="card-trans">Visa</span>
                <span className="card-sum">1560.00</span>
                <span className="card-chip">ЧИП</span>
            </div>
        </CargContainer>
    );
}